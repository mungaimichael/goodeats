import Input from "@/components/Input";
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import Animated, { FadeInLeft } from "react-native-reanimated";


const Signup = () => {

    const AnimatedText = Animated.createAnimatedComponent(Text);


    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: 'white' }}
        >
            {/* 
            Input Area 
        */}

            <Animated.View
                style={styles.inputSection}
                entering={FadeInLeft.duration(400).springify()}

            >
                <AnimatedText
                    style={{ fontFamily: 'semiBold', fontSize: 22, marginTop: 10 }}
                >Sign Up</AnimatedText>
                <AnimatedText
                    style={{ fontFamily: 'light', marginVertical: 5 }}
                >Create Account and Explore Good Eats</AnimatedText>

                <View
                    style={styles.inputsWrapper}
                >
                    <Input
                        label="Name"
                        ph="John Doe"
                    />
                    <Input
                        label="Email"
                        ph="JohnDoe@email.com"
                    />
                    <Input
                        label="Password"
                        ph="min six characters"
                    />
                </View>
            </Animated.View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    inputSection: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 22,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    inputsWrapper: {
        justifyContent: "flex-start",
        height: '30%',
        marginVertical: 4,
        gap: 60,
        width: '100%'
    }
})
export default Signup; 