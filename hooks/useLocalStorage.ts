import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

interface UserData {
    userName: string,
    email: string
}
const useLocalStorage = ({ userName, email }: UserData) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState();


    const addUserToLocalStorage = async ({ userName, email }: UserData): Promise<void> => {
        try {
            setLoading(true);
            const jsonData = JSON.stringify({ userName, email })
            await AsyncStorage.setItem('data', jsonData, (error) => console.log(error));
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }


    return [addUserToLocalStorage]
}

export default useLocalStorage; 