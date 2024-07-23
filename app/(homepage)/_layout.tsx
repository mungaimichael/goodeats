import { Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useSelector } from "react-redux";



export default function _layout() {

    const notifications = useSelector((state) => state.userNotifications);


    const opacityShared = useSharedValue(0)
    const AnimatedText = Animated.createAnimatedComponent(Text);

    const animatedTextStyles = useAnimatedStyle(() => {
        return {
            opacity: withSpring(opacityShared.value + 1),

        }
    })



    return (
        <Stack
            screenOptions={({ route }) => ({
                headerTitle: () => (<View
                    style={styles.header}
                ><Text
                    style={styles.headerText}
                >{route.name}</Text></View>),

                headerShadowVisible: false,
                headerRight: () => (
                    <View
                        style={{ position: "relative" }}
                    >
                        <AnimatedText

                            style={[styles.notifText, animatedTextStyles]}


                        >{notifications && notifications}</AnimatedText>
                        <Image
                            style={styles.image}
                            source={require("./../../assets/images/bell.png")} />
                    </View>
                ),
                headerBackground: () => <View
                    style={[styles.header]}
                ></View>
            })}
        >
            <Stack.Screen
                name="Home"


            />
        </Stack>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        height: 50,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 'auto',

    },
    headerText: {
        fontFamily: 'semiBold',
        fontSize: 18
    },
    image: {
        height: 25,
        width: 25
    },
    notifText: {
        fontFamily: 'semiBold',
        color: 'green',
        fontSize: 16,
        position: 'absolute',
        zIndex: 2,
        top: -12,
        right: 2,
        backgroundColor: '#fff'
    }
})