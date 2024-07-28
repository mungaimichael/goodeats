import { transform } from "@babel/core";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInRight, FadeInUp, FadeOutUp } from "react-native-reanimated";
import { useSelector } from "react-redux";



const { height } = Dimensions.get('screen');

export default function StackedCards() {



    // get the recipe from the redux store

    // const { query, searchedData, loading, error } = useSelector((state) => state.queryData);



    return (

        <View
            style={[styles.mainWrapper, { height: height / 6, }]}
        >
            {
                new Array(3).fill([1, 0.5, 0.2]).map((val, index) => (

                    <SingleCard
                        key={index}
                        index={index}
                    />
                ))
            }

            {/* <SingleCard /> */}
        </View>
    )
}


type args = {
    key?: any,
    index: number
}
function SingleCard({ index }: args) {

    const scale = index === 0 ? 1 :
        index === 1 ? 0.95 :
            index === 2 ? 0.9 :
                0.4;

    return (
        <Animated.View
            entering={FadeInRight}

            style={[styles.singleCard,

            {
                zIndex: -index,
                transform: [
                    {
                        translateY: 9 * index
                    },
                    {
                        scale
                    }
                ],
                backgroundColor: scale === 1 ? `rgba(25, 111, 61, 1)` : `rgba(25, 111, 61, 0.6)`,
                opacity: scale === 1 ? 1 : scale - 0.3


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
                >Less Hustle. More Fun</Text>
                <Pressable
                    style={{ width: 50, height: 20, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}
                >
                    <Text
                        style={{ fontFamily: 'regular' }}
                    >Try</Text>
                </Pressable>
            </View>
            <Image
                source={require("../assets/images/arrow-right.png")}
                style={{ width: 25, height: 25, marginRight: 10, top: 5 }}
            />
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
        height: '60%',

        position: 'absolute',
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
        borderWidth: 1,
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