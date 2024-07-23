import { initNewUser } from "@/redux/UserDetailsSlice";
import { useEffect, useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";

interface InputArgs {
    label: string;
    ph: string;
    showPw?: boolean;
    fieldName: keyof FormValues;
}

interface FormValues {
    name: string;
    email: string;
    password: string;
}

export default function Input({ label, ph, showPw, fieldName }: InputArgs) {






    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        email: '',
        password: ''
    });

    function onInputChange(value: string) {
        setFormValues(prevValues => ({
            ...prevValues,
            [fieldName]: value
        }));
        console.log(formValues)
    }


    return (
        <View style={{ width: '100%', height: 35, marginTop: 10 }}>
            <Text style={{ fontSize: 17, fontFamily: 'regular' }}>{label}</Text>
            <TextInput
                placeholder={ph}
                style={styles.input}
                value={formValues[fieldName]}
                onChangeText={onInputChange}
                secureTextEntry={showPw}
                passwordRules={showPw ? 'required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;' : undefined}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: 'whitesmoke',
        height: 46,
        borderRadius: 10,
        marginVertical: 15,
        fontFamily: 'light',
        padding: 4,
        paddingLeft: 7,
        fontSize: 16
    }
});
