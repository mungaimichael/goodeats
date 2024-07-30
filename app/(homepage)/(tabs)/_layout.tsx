import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";


export default function BottomTabsLayout() {


    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,


            }}
        >
            <Tabs.Screen
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => focused ? <Ionicons color={'grey'} size={20} name="home" /> : <Ionicons color={'grey'} size={20} name="home-outline" />
                }}
                name="index"
            />


            <Tabs.Screen
                options={{
                    title: 'Recipes',
                    tabBarIcon: ({ focused }) => focused ? <Entypo color={'grey'} size={20} name="open-book" /> : <Entypo color={'grey'} size={20} name="open-book" />
                }}
                name="Recipes"
            />

            <Tabs.Screen
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => <AntDesign name="user" size={20} color={'grey'} />
                }}
                name="Profile"

            />
        </Tabs>
    )
}