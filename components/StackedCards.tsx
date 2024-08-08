import { transform } from "@babel/core";
import { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeInRight, FadeInUp, FadeOut, FadeOutUp, LinearTransition, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { useSelector } from "react-redux";



const { height } = Dimensions.get('screen');

export default function StackedCards() {

    // keep track of index to show card on top 
    const [currentIndex, setCurrentIndex] = useState<number>(0);


    const progress = useSharedValue(1);

    const scale = useSharedValue(1)


    const handleCardPress = (index: number) => {
        scale.value = index === 0 ? 1 :
            index === 1 ? 0.95 :
                index === 2 ? 0.9 :
                    1

        progress.value = progress.value === 0 ? 1 : 0


    }






    const [activeCard, setActiveCard] = useState<boolean>(true)


    const clickActiveCard = () => setActiveCard((prev) => !prev);
    return (

        <Animated.View
            entering={FadeInRight}

            style={[styles.mainWrapper, { height: activeCard ? height / 2.7 : height / 7 }]}
        >
            {
                new Array(3).fill(null).map((_, index) => (

                    <SingleCard
                        key={index}
                        index={index}
                        clickActiveCard={clickActiveCard}
                        active={activeCard}
                        scale={scale.value}
                        progress={progress.value}

                        handleCardPress={handleCardPress}
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
    scale: number
    progress: number,
    handleCardPress: (index: number) => void

}


function SingleCard({ index, clickActiveCard, progress, scale, handleCardPress }: args) {


    // shared value to handle animation

    const cardAnimatedStyle = useAnimatedStyle(() => {

        return {
            transform: [
                {
                    translateY: progress === 1 ? 9 * index : 0
                },
                {
                    scale: progress === 1 ? index === 0 ? 1 :
                        index === 1 ? .93 :
                            index === 2 ? .89 :
                                1 : 1

                }
            ],
            backgroundColor: progress === 1 ? index === 0 ? "rgba(25, 111, 61, 1)" : index === 1 ? "#F0D6B5" : "#5e3602" : index === 1 ? "#F0D6B5" : index === 2 ? "#5e36029c" : "rgba(25, 111, 61, 1)",
            opacity: progress === 0 ? scale === 1 ? 1 : scale - 0.5 : 1,

            position: progress && progress === 1 ? "absolute" : "relative"

        }
    })

    const AnimatedPress = Animated.createAnimatedComponent(Pressable)


    return (

        <AnimatedPress

            onPress={() => { clickActiveCard(); handleCardPress(index) }}

            layout={LinearTransition.springify(500).duration(1000).delay(80)}
            style={[
                styles.singleCard,
                cardAnimatedStyle,


                {
                    zIndex: -index,
                }
            ]}
        >

        </AnimatedPress>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        position: 'relative',
        width: '90%',
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
        borderWidth: 0.5,
        elevation: 6,
        borderColor: '#a0a0a0',
        marginVertical: 5



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