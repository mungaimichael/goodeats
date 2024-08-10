import { FunctionDeclarationSchemaType } from "@google/generative-ai";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");


interface initial {
    query: string[],
    searchedData: MealData | null,
    loading: boolean,
    error: string | null
}

interface Meal {
    name: string;
    prep_time: string;
    cook_time: string;
    ingredients: string[];
    instructions: string[];
};

interface MealData {
    meals: Meal[];
};



// async call to the api

const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);


const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

// model config 

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,

    generationConfig: {
        responseMimeType: "application/text",
    }
}


export const fetchChatData = createAsyncThunk(
    'chat/sendUserQuery',

    async (search: Array<string>) => {



        try {
            const chatSession = model.startChat({
                generationConfig
            });



            const result = await model.generateContent(`easy meal prep using ${search.map(item => item)} in json following 
                this format interface Meal {
    name: string;
    prep_time: string;
    cook_time: string;
    ingredients: string[];
    instructions: string[];
} and interface MealData {
    meals: Meal[];
};
remove anything else outside the json
            `)



            const data = await result.response.text()


            return data

        } catch (error) {

        }
    }
);


const DataFetchSlice = createSlice({
    name: 'chat',
    initialState: {
        query: [],
        searchedData: null,
        loading: false,
        error: null
    } as initial,

    reducers: {
        addQueryString: (state, action: PayloadAction<{ query: string }>) => {
            const { query } = action.payload
            state.query = [...state.query, query];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChatData.pending, (state) => {
                console.log('loading')
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChatData.fulfilled, (state, action) => {


                function cleanAndParseJSON(responseString: string) {
                    // Remove backticks at the beginning and end of the string
                    const cleanedString = responseString.replace(/```json/g, '').replace(/```/g, '').trim();

                    // Parse the cleaned string as JSON
                    try {
                        const parsedJSON = JSON.parse(cleanedString);
                        return parsedJSON;
                    } catch (error) {
                        console.error("Invalid JSON format:", error);
                        return null;
                    }
                }

                const data = cleanAndParseJSON(action.payload)


                state.loading = false
                state.searchedData = data
                console.log('fulfilled', data)

            })
            .addCase(fetchChatData.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Rejected';
            });
    },
})


export const { addQueryString } = DataFetchSlice.actions

export default DataFetchSlice.reducer