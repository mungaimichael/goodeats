import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function MenuFlatList() {

    const data: dataType[] = [
        {
            image: require('../assets/images/one.jpg'),
            title: "Spaghetti Carbonara",
            prepTime: "20 mins"
        },
        {
            image: require('../assets/images/two.jpg'),
            title: "Caesar Salad",
            prepTime: "15 mins"
        },
        {
            image: require('../assets/images/three.jpg'),
            title: "Chicken Curry",
            prepTime: "30 mins"
        },
        {
            image: require('../assets/images/four.jpg'),
            title: "Beef Tacos",
            prepTime: "25 mins"
        },
        {
            image: require('../assets/images/four.jpg'),
            title: "Grilled Cheese Sandwich",
            prepTime: "10 mins"
        },
        {
            image: require('../assets/images/three.jpg'),
            title: "Vegetable Stir Fry",
            prepTime: "20 mins"
        },
        {
            image: require('../assets/images/two.jpg'),
            title: "Pancakes",
            prepTime: "15 mins"
        },
        {
            image: require('../assets/images/one.jpg'),
            title: "Chocolate Cake",
            prepTime: "1 hr"
        },
    ];



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
                        style={styles.image}
                    />
                    <Text
                        style={{ fontFamily: "regular", fontSize: 14, marginTop: 2 }}
                    >{title}</Text>
                    <View
                        style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: "center" }}
                    >
                        <Image
                            source={require("../assets/images/timer.png")}
                            style={{ height: 14, width: 14 }}
                        />
                        <Text
                            style={{ fontFamily: "regular", fontSize: 14 }}

                        >{prepTime}</Text>
                    </View>
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
        marginLeft: 15,


    },
    item: {
        height: 230,
        width: 130,
        marginHorizontal: 8,
        borderRadius: 8

    },
    image: {
        borderRadius: 8,
        resizeMode: "cover",
        width: '100%',
        height: '80%'
    }
})