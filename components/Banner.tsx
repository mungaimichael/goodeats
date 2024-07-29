import { Dimensions, Image, StyleSheet, Text, View } from "react-native";


export default function Banner() {

    const { height } = Dimensions.get('screen')

    return (
        <View
            style={[styles.banner, { height: height / 7, }]}
        >

            <View
                style={{ height: '100%', width: '40%', justifyContent: 'center', paddingTop: 15, alignItems: 'flex-start', padding: 15, }}
            >
                <Text
                    style={[styles.text, { fontFamily: 'semiBold' }]}
                >Chicked Terikayki ? </Text>
                <Text
                    style={[styles.text, { textTransform: 'capitalize' }]}
                >Learn How To in less than 2 min</Text>
            </View>
            <View
                style={{ flex: 2, width: '70%', height: '100%', overflow: 'hidden', borderRadius: 15 }}
            >
                <Image
                    style={{ width: "140%", height: '150%', right: 3, top: -40, borderRadius: 10 }}
                    source={require("../assets/images/chicken.png")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: '#6c781020',
        flexDirection: 'row',
        width: '85%',
        marginHorizontal: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        fontFamily: 'light',
        fontSize: 15,
        width: '100%'
    }
})