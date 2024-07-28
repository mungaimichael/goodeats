import { addQueryString, fetchChatData } from "@/redux/DataFetchSlice";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from "react-native-reanimated"

import { useDispatch, UseDispatch, useSelector } from "react-redux";

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

export default function HomeInput() {

    const [search, setSearch] = useState<string>('')

    const [userIngredients, setUserIngredients] = useState<string[]>([
    ]);


    const AniText = Animated.createAnimatedComponent(Text)


    const opacitySv = useSharedValue(0);


    const animatedViewStyles = useAnimatedStyle(() => {
        return {
            opacity: opacitySv.value + 1
        }
    })


    // redux logic
    const dispatch = useDispatch()




    const { query, searchedData, loading, error } = useSelector((state: any) => state.queryData);
    return (

        <>
            <Animated.View
                style={styles.inputWrapper}
            >

                <Pressable
                    disabled={search === '' ? true : false}
                    onPress={(val) => {
                        setUserIngredients(prev => [...prev, search]);
                        dispatch(addQueryString({ query: search }))
                    }}
                    style={styles.button}


                >
                    <Image
                        source={require("../assets/images/add.png")}
                        style={{ width: 30, height: 30, }}


                    />
                </Pressable>
                <TextInput
                    onChangeText={(value) => setSearch(value)}
                    value={search}
                    style={styles.input}
                    placeholder="Add Ingredients to Search"
                >

                </TextInput>

                <Pressable
                    style={styles.search}
                    onPress={() => {
                        console.log(loading, error, searchedData, query);
                        // dispatch(fetchChatData(search))
                    }}
                >
                    <Image
                        source={require("../assets/images/search.png")}
                        style={{ width: 30, height: 30 }}
                    />
                </Pressable>




            </Animated.View>

            <Animated.FlatList

                horizontal
                showsHorizontalScrollIndicator={false}
                data={userIngredients}
                style={{ marginVertical: 10, }}
                renderItem={({ item }) =>
                    <Text
                        style={{ fontFamily: 'light', fontSize: 15, flexDirection: 'row', flexWrap: "wrap", marginHorizontal: 5, }}
                    >{item}</Text>}
            />

        </>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative'
    },
    input: {
        width: '90%',
        height: '100%',
        backgroundColor: '#6c781020',
        marginHorizontal: 'auto',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 14,
        paddingLeft: 45,
        fontFamily: 'regular'

    },
    button: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 27,
        zIndex: 1,

    },
    search: {
        position: 'absolute',
        right: 20,
        height: '100%',
        backgroundColor: 'rgba(25, 111, 61 , 0.8)',
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    }
})