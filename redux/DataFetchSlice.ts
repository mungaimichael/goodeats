import { FunctionDeclarationSchemaType } from "@google/generative-ai";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");


interface initial {
    query: string,
    searchedData: {} | null,
    loading: boolean,
    error: string | null
}


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
        responseMimeType: "application/json",
    }
}


export const fetchChatData = createAsyncThunk(
    'chat/sendUserQuery',

    async (search: string) => {

        try {
            const chatSession = model.startChat({
                generationConfig
            });

            // const result = await chatSession.sendMessage(`Short and easy meal prep using ${search}`);


            const result = await model.generateContent(`easy meal prep using ${search} in a structured json format`)

            const data = await result.response.text()

            return data

        } catch (error) {

        }
    }
);


const DataFetchSlice = createSlice({
    name: 'chat',
    initialState: {
        query: '',
        searchedData: null,
        loading: false,
        error: null
    } as initial,

    reducers: {
        addQueryString: (state, action: PayloadAction<{ query: string }>) => {
            state.query = action.payload.query;
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
                state.loading = false;
                state.searchedData = action.payload;
                console.log('fulfilled', action.payload)

            })
            .addCase(fetchChatData.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Rejected';
            });
    },
})


export const { addQueryString } = DataFetchSlice.actions

export default DataFetchSlice.reducer