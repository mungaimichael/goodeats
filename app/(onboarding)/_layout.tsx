import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


export const unstable_settings = {
    initialRouteName: "index",
};

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#fff',
                },

                headerTitle: () =>
                    <View
                        style={styles.header}
                    >
                        <Image
                            source={require('../../assets/images/bowl.png')}
                            style={styles.image}
                        />
                        <Text
                            style={styles.headerTitle}

                        >

                            Good Eats</Text>
                    </View>

            }}
        >
            <Stack.Screen
                name='Welcome'

            />
            <Stack.Screen
                name="Welcome2"
            
            />
        </Stack>
    )
}


const styles = StyleSheet.create({
    headerTitle: {
        fontFamily: 'regular',
        letterSpacing: 2,
        fontSize: 25,
        color: 'black',

    },
    header: {
        // height: 60,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        height: 30,
        width: 30,
        marginRight: 6
    }
})

export default Layout