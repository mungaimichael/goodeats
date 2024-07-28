

import Banner from "@/components/Banner";
import HomeInput from "@/components/HomeInput";
import StackedCards from "@/components/StackedCards";
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

                style={[styles.mainWrapper, { height: height / 9 }]}
            >
                <View
                    style={styles.contentWrapper}
                >
                    <HomeInput />
                </View>
            </Animated.View>

            <StackedCards />
            <Banner />
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        marginHorizontal: 'auto',
    },
    contentWrapper: {
        flex: 1,
        marginHorizontal: 'auto',
        width: '97%',
    }
})