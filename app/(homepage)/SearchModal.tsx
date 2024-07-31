import { Text, View } from "react-native";


import mealPrepCollection from "../data";

export default function SearchModal() {

    const { title, description, recipes } = mealPrepCollection

    return (
        <View>
            <Text>{title}</Text>

        </View>
    )
}