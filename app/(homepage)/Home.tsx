

import HomeInput from "@/components/HomeInput";
import Recipes from "@/components/Recipes";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

export default function Home() {

    const { height } = Dimensions.get('screen')

    return (
        <View
            style={{ backgroundColor: '#fff', }}
        >
            <Animated.View
                entering={FadeIn}

                style={[styles.mainWrapper, { height: height / 7 }]}
            >
                <View
                    style={styles.contentWrapper}
                >
                    <HomeInput />
                </View>
            </Animated.View>

            <Recipes />
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        marginHorizontal: 'auto',
        backgroundColor: 'white'
    },
    contentWrapper: {
        flex: 1,
        marginHorizontal: 'auto',
        width: '97%',
    }
})