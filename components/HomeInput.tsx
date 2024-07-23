import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from "react-native-reanimated"



export default function HomeInput() {

    const [search, setSearch] = useState<string>('')

    const [userIngredients, setUserIngredients] = useState<string[]>([
        'Meat', 'Pork'
    ]);


    const AniText = Animated.createAnimatedComponent(Text)
    const opacitySv = useSharedValue(0);


    const animatedViewStyles = useAnimatedStyle(() => {
        return {
            opacity: opacitySv.value + 1
        }
    })
    return (

        <View>
            <Animated.View
                style={styles.inputWrapper}
            >

                <Pressable
                    disabled={search === '' ? true : false}
                    onPress={(val) => { setSearch(""); setUserIngredients(prev => [...prev, search]); }}
                    style={styles.button}


                >
                    <Image
                        source={require("../assets/images/add.png")}
                        style={{ width: 30, height: 30, }}


                    />
                </Pressable>
                <TextInput
                    onChangeText={(value) => setSearch(value)}
                    value={search}
                    style={styles.input}
                    placeholder="Add Ingredients to Search"
                >
                </TextInput>

                {/* View to hold all user ingredients */}




            </Animated.View>

            <Animated.FlatList

                horizontal
                showsHorizontalScrollIndicator={false}
                data={userIngredients}
                style={{ marginVertical: 15, }}
                renderItem={({ item }) =>
                    <Text
                        style={{ fontFamily: 'light', fontSize: 15, flexDirection: 'row', flexWrap: "wrap", marginHorizontal: 5, }}
                    >{item}</Text>}
            />
            <Pressable
                style={styles.formBtn}
            >
                <Text
                    style={{ fontFamily: 'semiBold', fontSize: 17, color: '#fff' }}
                >
                    Search Meals
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative'
    },
    input: {
        width: '90%',
        height: '100%',
        backgroundColor: '#6c781020',
        marginHorizontal: 'auto',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 14,
        paddingLeft: 45,
        fontFamily: 'regular'

    },
    button: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 27,
        zIndex: 1,

    },
    formBtn: {
        width: '40%',
        height: 40,
        backgroundColor: '#6c781086',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto',
        borderRadius: 5
    }
})