import { Image, Pressable, StyleSheet, Text, View } from "react-native";


import * as Sharing from "expo-sharing"


import mealPrepCollection from "../data";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { Link } from "expo-router";
import { useState } from "react";
import Pager from "@/components/Pager";

export default function SearchModal() {

    const [active, setActive] = useState<boolean>(true)

    const { title, recipes } = mealPrepCollection

    const { name } = recipes[0]


    // sharing



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
                    {name}
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