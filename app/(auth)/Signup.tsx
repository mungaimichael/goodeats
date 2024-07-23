import Input from "@/components/Input";
import { initNewUser } from "@/redux/UserDetailsSlice";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, ActivityIndicator, View } from "react-native"
import Animated, { FadeIn, FadeInLeft } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";


const Signup = () => {

    const AnimatedText = Animated.createAnimatedComponent(Text);

    const userDetails = useSelector((state) => state.userDetails);

    // useEffect(() => console.log(userDetails))

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [loading, setLoading] = useState<boolean | null>(false)

    const dispatch = useDispatch()


    const onFormSubmit = () => {

        setLoading(true);
        setTimeout(() => {
            dispatch(initNewUser({ name, email, password }))
            setLoading(false)
        }, 3000);


    }






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
                    <View style={{ width: '100%', height: 35, marginTop: 5 }}>
                        <Text style={{ fontSize: 17, fontFamily: 'regular' }}>Name</Text>
                        <TextInput
                            placeholder="name"
                            style={styles.input}
                            value={name}
                            onChangeText={(val) => setName(val)}

                        />
                    </View>
                    <View style={{ width: '100%', height: 35, marginTop: 5 }}>
                        <Text style={{ fontSize: 17, fontFamily: 'regular' }}>Email</Text>
                        <TextInput
                            placeholder="JohnDow@email.com"
                            style={styles.input}
                            value={email}
                            onChangeText={(val) => setEmail(val)}

                        />
                    </View>
                    <View style={{ width: '100%', height: 35, marginTop: 5 }}>
                        <Text style={{ fontSize: 17, fontFamily: 'regular' }}>Password</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={(val) => setPassword(val)}

                        />
                    </View>

                </View>


                <Pressable
                    onPress={() => { onFormSubmit(); router.push('/(homepage)/Home') }}
                    style={styles.button}
                >
                    <Text
                        style={{ fontFamily: 'semiBold', fontSize: 17, color: '#fff' }}
                    >
                        {loading ? <ActivityIndicator
                            animating={loading}
                            color={"#fff"}
                        /> : "Register"}
                    </Text>
                </Pressable>

                <View
                    style={{
                        width: '100%', flex: 1, justifyContent: 'space-between', alignItems: 'center',
                        marginTop: 6
                    }}
                >
                    <Text
                        style={{ fontSize: 16 }}
                    >Have an account ? <Link
                        style={{ color: '#257625', fontFamily: 'semiBold' }}
                        href="(onboarding)/Welcome">Login</Link> </Text>

                    <Text
                        style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}
                    >By Clicking Register, you agree to our {"\n"}
                        <Link
                            style={{ color: '#257625', fontFamily: 'semiBold' }}
                            href="(onboarding)/Welcome">Terms & Conditions Policy</Link> </Text>
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
        height: 300,
        marginVertical: 4,
        gap: 60,
        width: '100%'
    },
    input: {
        width: '100%',
        backgroundColor: 'rgba(245, 245, 245, 0.6)',
        height: 46,
        borderRadius: 10,
        marginVertical: 15,
        fontFamily: 'light',
        padding: 4,
        paddingLeft: 7,
        fontSize: 16,
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#257625',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})
export default Signup; 