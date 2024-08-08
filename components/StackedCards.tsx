import { transform } from "@babel/core";
import { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInRight, FadeInUp, FadeOutUp, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSelector } from "react-redux";



const { height } = Dimensions.get('screen');

export default function StackedCards() {

    // keep track of index to show card on top 
    const [currentIndex, setCurrentIndex] = useState<number>(0);









    // get the recipe from the redux store

    // const { query, searchedData, loading, error } = useSelector((state) => state.queryData);



    const [activeCard, setActiveCard] = useState<boolean>(false)


    const clickActiveCard = () => setActiveCard((prev) => !prev);
    return (

        <Animated.View
            entering={FadeInRight}

            style={[styles.mainWrapper, { height: activeCard ? height / 2.7 : height / 6, }]}
        >
            {
                new Array(3).fill(null).map((_, index) => (

                    <SingleCard
                        key={index}
                        index={index}
                        clickActiveCard={clickActiveCard}
                        active={activeCard}
                    />
                ))
            }

        </Animated.View>
    )
}


type args = {
    key?: any,
    index: number,
    clickActiveCard: () => void
    active: boolean

}


function SingleCard({ index, active, clickActiveCard }: args) {


    // shared value to handle animation

    const progress = useSharedValue(1);

    const scale = useSharedValue(index === 0 ? 1 :
        index === 1 ? 0.95 :
            index === 2 ? 0.9 :
                0.4)





    const cardAnimatedStyle = useAnimatedStyle(() => {

        return {
            transform: [
                {
                    translateY: progress.value === 1 ? 9 * index : 0
                },
                {
                    scale: progress.value === 1 ? scale.value : 1
                }
            ],
            backgroundColor: progress.value === 0 ? scale.value === 1 ? `rgba(25, 111, 61, 1)` : `rgba(25, 111, 61, 0.6)` : "rgba(25, 111, 61, 1)",
            opacity: progress.value === 0 ? scale.value === 1 ? 1 : scale.value - 0.5 : 1,

            position: "absolute"

        }
    })

    return (

        <Animated.View



            style={[
                styles.singleCard,
                cardAnimatedStyle,


                {
                    zIndex: -index,


                }
            ]}
        >
            <View
                style={styles.desc}
            >
                <Text
                    style={[styles.text, { fontSize: 16 }]}
                >Instant Meal Prep Ideas</Text>
                <Text
                    style={[styles.text, { fontFamily: 'regular' }]}
                >Less Hustle. More Fun {progress.value === 0 ? "active" : "not active"}</Text>
                <Pressable
                    style={{ width: 50, height: 20, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}
                >
                    <Text
                        style={{ fontFamily: 'semiBold' }}
                    >{progress.value}</Text>
                </Pressable>
            </View>
            <Pressable
                onPress={() => { clickActiveCard(); progress.value = progress.value === 0 ? 1 : 0 }}
            >
                <Image
                    source={require("../assets/images/arrow-right.png")}
                    style={{ width: 25, height: 25, marginRight: 10, top: 5 }}
                />
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        position: 'relative',
        width: '85%',
        marginHorizontal: 'auto',
        alignItems: 'center',
        justifyContent: 'flex-start',



    },
    singleCard: {
        width: '100%',
        height: 100,
        borderCurve: 'continuous',
        shadowColor: '#716d6d',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        borderRadius: 8,
        marginHorizontal: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderWidth: 2,
        elevation: 6,
        borderColor: '#a0a0a0',



    },
    desc: {
        justifyContent: 'space-around',
        paddingLeft: 15,
        height: '80%'
    },
    text: {
        fontFamily: 'semiBold',
        fontSize: 13,
        color: '#fff'
    }
})