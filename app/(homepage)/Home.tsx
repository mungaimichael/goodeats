

import HomeInput from "@/components/HomeInput";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Home() {



    return (
        <Animated.View
            entering={FadeInDown}

            style={[styles.mainWrapper]}
        >
            <View
                style={styles.contentWrapper}
            >
                <HomeInput />
            </View>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
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