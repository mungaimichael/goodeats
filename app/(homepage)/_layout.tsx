import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useSelector } from "react-redux";

import * as Print from "expo-print"

import * as Sharing from "expo-sharing"



export default function _layout() {

    const notifications = useSelector((state: any) => state.userNotifications);

    const { query, searchedData, loading, error } = useSelector((state: any) => state.queryData);




    const opacityShared = useSharedValue(0)
    const AnimatedText = Animated.createAnimatedComponent(Text);

    const animatedTextStyles = useAnimatedStyle(() => {
        return {
            opacity: withSpring(opacityShared.value + 1),

        }
    })

    const html = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chicken & Veggie Skewers Recipe</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
        }
        .container {
            width: 80%;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .section {
            margin-bottom: 20px;
        }
        .section h2 {
            border-bottom: 2px solid #f1c40f;
            padding-bottom: 5px;
            color: #e67e22;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        ul li {
            background: #e7f3fe;
            margin: 5px 0;
            padding: 10px;
            border-radius: 5px;
        }
        .tips {
            background-color: #fcf8e3;
            padding: 10px;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Chicken & Veggie Skewers</h1>
        <div class="section">
            <h2>Ingredients</h2>
            <ul>
                <li>1 lb boneless, skinless chicken breasts, cut into 1-inch cubes</li>
                <li>1 red bell pepper, cut into 1-inch pieces</li>
                <li>1 yellow bell pepper, cut into 1-inch pieces</li>
                <li>1 zucchini, cut into 1-inch pieces</li>
                <li>1 red onion, cut into 1-inch pieces</li>
                <li>1 tbsp olive oil</li>
                <li>1 tsp Italian seasoning</li>
                <li>Salt and pepper to taste</li>
            </ul>
        </div>
        <div class="section">
            <h2>Instructions</h2>
            <ul>
                <li>Combine chicken, bell peppers, zucchini, and onion in a large bowl.</li>
                <li>Drizzle with olive oil and sprinkle with Italian seasoning, salt, and pepper.</li>
                <li>Thread chicken and vegetables onto skewers.</li>
                <li>Grill or bake skewers for 15-20 minutes, or until chicken is cooked through.</li>
                <li>Serve with your favorite sides.</li>
            </ul>
        </div>
        <div class="section">
            <h2>Meal Prep Tips</h2>
            <ul>
                <li>Assemble skewers in advance and store them in the refrigerator for up to 2 days.</li>
                <li>Grill or bake skewers in batches and store them in airtight containers for up to 3 days.</li>
            </ul>
        </div>
    </div>
</body>
</html>

    `

    async function shareRecipe() {

        try {
            const file = await Print.printToFileAsync({
                html,
                base64: false
            })
            await Sharing.shareAsync(file.uri);

        } catch (error) {
            console.log(error)
        }

    }



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
                options={{
                    headerShown: false
                }}
                name="(tabs)"
            />
            <Stack.Screen
                name="SearchModal"
                options={{
                    presentation: 'modal',
                    headerTitleAlign: 'center',
                    headerTitle: '',
                    headerShadowVisible: false,

                    header: ({ navigation: { goBack } }) => (

                        <View
                            style={[styles.header, { backgroundColor: '#F3EEE7', justifyContent: 'space-between', borderWidth: 0 }]}
                        >
                            <Pressable
                                onPress={goBack}
                                style={[styles.icon, { backgroundColor: '#fff' }]}
                            ><Ionicons name="chevron-back" size={19} color="black" /></Pressable>
                            <View
                                style={{ width: '25%', height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}
                            >
                                <Pressable

                                    style={styles.icon}
                                ><Ionicons name="heart" size={19} color="black" /></Pressable>
                                <Pressable
                                    onPress={shareRecipe}
                                    style={[styles.icon, { backgroundColor: '#fff' }]}
                                ><FontAwesome5 name="share-square" size={19} color="black" /></Pressable>

                            </View>
                        </View>)
                }}
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
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#F1C737',
        alignItems: 'center',
        justifyContent: 'center'
    }


})  