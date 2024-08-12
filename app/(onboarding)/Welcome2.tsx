import { Link, router } from 'expo-router';
import React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Welcome2 = () => {

    return (
        <SafeAreaView style={styles.mainWrapper}>
            <View
                style={styles.parentWrapper}
            >


                <View
                    style={styles.firstSection}
                >
                    <Image
                        style={styles.imageOne}
                        source={require(`../../assets/images/1.jpg`)} />
                    <ImageWrapper
                        top={20}
                    >
                        <Image
                            style={styles.image}
                            source={require(`../../assets/images/2.jpg`)} />
                    </ImageWrapper>
                    <ImageWrapper
                        top={120}
                        left={290}
                    >
                        <Image
                            style={styles.image}
                            source={require(`../../assets/images/2.jpg`)} />
                    </ImageWrapper>
                    <ImageWrapper
                        top={170}
                        left={30}
                    >
                        <Image
                            style={styles.image}
                            source={require(`../../assets/images/3.jpg`)} />
                    </ImageWrapper>

                </View>


                <View
                    style={styles.secondSection}
                >
                    <Text style={styles.descTitle}>All Your Favourite Foods</Text>
                    <Text style={[styles.descTitle, { fontSize: 14, marginTop: 4 }]}>
                        Lorem ipsum dolor sit, odio aspernatur, assumenda libero rem suscipit qui a debitis. Eum, omnis!
                    </Text>


                </View>

                <View
                    style={styles.buttonWrapper}
                >
                    <Image source={require("../../assets/images/dot.png")} style={{ height: 40, width: 40 }} />
                    <Link
                        asChild
                        href="/(auth)/Signup"
                        style={[styles.button]}

                    >
                        <Pressable
                        >
                            <Text style={[styles.buttonText, { color: 'white' }]} >
                                Get Started
                            </Text>
                        </Pressable>

                    </Link>
                    <Link
                        asChild
                        href="/Signup"
                        style={[styles.button, { backgroundColor: "#91EE91" }]}

                    >
                        <Pressable
                        >
                            <Text
                                style={styles.buttonText}
                            >Sign In</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>


        </SafeAreaView>
    );
}

interface Props {
    children: React.ReactNode,
    top: number,
    left?: number
}

function ImageWrapper({ children, top, left }: Props) {
    return <View
        style={[{
            width: 55,
            height: 55,
            padding: 35,
            backgroundColor: 'white',
            borderRadius: 120,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: top,
            left: left ? left : null
        }]}
    >
        {children}
    </View>
};

const styles = StyleSheet.create({
    parentWrapper: {
        flex: 1,
    },
    firstSection: {
        flex: 2,
        backgroundColor: 'white',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '80%',
        marginHorizontal: 'auto',
        marginVertical: 3,

    },
    mainWrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: 50,
        height: 50,
        position: 'absolute',
        borderRadius: 100,
    },
    imageOne: {
        width: '60%',
        height: '60%',
        borderRadius: 165,
    },
    imageWrapper: {
        width: 55,
        height: 55,
        padding: 0,
        borderRadius: 120,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },

    descTitle: {
        fontFamily: 'semiBold',
        fontSize: 30,
        textAlign: 'center',
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        width: 320,
        height: 50,
        marginHorizontal: 'auto',
        backgroundColor: '#0A420A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 7,
    },
    buttonText: {
        color: '#0A420A',
        fontSize: 18,
        fontFamily: 'semiBold',
    },
});

export default Welcome2;
