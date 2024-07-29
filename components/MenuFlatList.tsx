import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function MenuFlatList() {

    const data: Array<dataType> = [{
        image: require('../assets/images/one.jpg'),
        title: "",
        prepTime: ""
    },
    {
        image: require('../assets/images/two.jpg'),
        title: "",
        prepTime: ""
    },
    {
        image: require('../assets/images/three.jpg'),
        title: "",
        prepTime: ""
    },
    {
        image: require('../assets/images/four.jpg'),
        title: "",
        prepTime: ""
    },
    {
        image: require('../assets/images/one.jpg'),
        title: "",
        prepTime: ""
    },
    ]


    return <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.wrapper}
        horizontal
        data={data}
        renderItem={({ item }) => {
            const { image, title, prepTime } = item
            return (
                <View
                    style={styles.item}
                >
                    <Image
                        source={image}
                        style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
                    />
                    <Text>title</Text>
                </View>
            )
        }
        }
    />
}

interface dataType {
    image: any,
    title: string,
    prepTime: string
}


const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        marginLeft: 15

    },
    item: {
        height: 120,
        width: 100,
        marginHorizontal: 5,
        backgroundColor: 'whitesmoke'
    }
})