import { Image, Pressable, StyleSheet, Text, View } from "react-native";


import * as Sharing from "expo-sharing"


import mealPrepCollection from "../data";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { Link } from "expo-router";
import { useState } from "react";
import Pager from "@/components/Pager";
import { useSelector } from "react-redux";

export default function SearchModal() {

    const [active, setActive] = useState<boolean>(true)





    //   Redux


    const { searchedData: { meals } } = useSelector(state => state.queryData)

    const first = meals[0]
    const { name: title } = first



    return (
        <Animated.View
            entering={FadeInLeft}
            style={Styles.mainWrapper}
        >
            {/* Image Container */}

            <View
                style={Styles.imageWrapper}
            >
                <Image
                    source={require("../../assets/images/food.png")}
                    style={{ width: '60%', height: '60%', resizeMode: 'contain' }}
                />
                <Text
                    style={{ fontFamily: 'loraBold', fontSize: 35, width: '70%', textAlign: 'center' }}
                >
                    {title}
                </Text>
            </View>

            {/* Ingredients and Preperation Container */}

            <View
                style={Styles.prepContainer}
            >
                <Pressable
                    style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}
                ><Text
                    style={{ fontFamily: 'semiBold', fontSize: 14, padding: 10, borderRadius: 10, backgroundColor: "#fff" }}
                >Ingredients</Text></Pressable>

                <Pressable
                    style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}

                ><Text
                    style={{ fontFamily: 'semiBold', fontSize: 14, padding: 10, borderRadius: 10, backgroundColor: "#fff" }}
                >Details</Text></Pressable>
                <Pressable
                    style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}

                ><Text
                    style={{ fontFamily: 'semiBold', fontSize: 14, padding: 10, borderRadius: 10, backgroundColor: "#fff" }}
                >Instructions</Text></Pressable>
            </View>




            {/* Pager View */}
            <Pager />


            <Pressable
                onPress={() => console.log(name)}
                style={{ position: 'absolute', bottom: 6, width: '80%', backgroundColor: "#4F6C4E", height: 45, borderRadius: 9, marginHorizontal: 40, justifyContent: "center", alignItems: 'center' }}
            >
                <Text
                    style={{ fontFamily: 'loraBold', fontSize: 20, color: '#F0D6B5' }}
                >Regenerate Recipe</Text>
            </Pressable>
        </Animated.View>
    )
}

const Styles = StyleSheet.create({
    mainWrapper: {
        backgroundColor: '#fff',
        flex: 1,
    },
    imageWrapper: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FCF5EC',
        gap: 10
    },
    prepContainer: {
        height: 80,
        marginHorizontal: 'auto',
        marginTop: 5,
        justifyContent: 'space-around',
        flexDirection: 'row'

    }
})