import { Stack } from "expo-router";
import { Button, Image, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { NavigationProp, useTheme } from '@react-navigation/native';
import { useEffect } from "react";



type RootStackParamList = {
    Signup: undefined;
};



export default function Layout() {

    const theme = useTheme()



    return (
        <Stack
            screenOptions={({ navigation }: { navigation: NavigationProp<RootStackParamList> }): NativeStackNavigationOptions => ({
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.navigate("(onboarding)/Welcome2")}>
                        <Image
                            style={{ width: 22, height: 22, marginLeft: 15 }}
                            source={require("../../assets/images/back.png")}
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {
                    backgroundColor: theme.dark === true ? "black" : "white",

                },
                headerShadowVisible: false,
                headerTitle: "",



            })}
        >
            <Stack.Screen
                name="Signup"
            />
        </Stack>
    )
}