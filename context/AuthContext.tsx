import { useRouter, useSegments } from 'expo-router';
import React, { createContext, useState, useContext, useEffect } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';


type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    signIn: (email: string) => void;
};

type AuthData = {
    token: string;
    email: string;
};

interface AuthProviderProps {
    children: React.ReactNode;
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthContext = createContext<AuthContextData>({ loading: true, signIn: () => { } });

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {


    const [addUserToLocalStorage]= useLocalStorage();
    const router = useRouter();
    const rootSegment = useSegments();

    const signIn = (username:string,email: string) => {
        addUserToLocalStorage(username, email)
        setAuthData({ email, token: email });
    };

    const [authData, setAuthData] = useState<AuthData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const run = async () => {
            const data = await getUserFromLocalStorage();
            if (data) {
                setAuthData(data);
            }
            setLoading(false);
        };
        run();

        // No need for token comparison here
        // Redirect logic can be handled after loading
    }, []);

    useEffect(() => {
        // Redirect logic after loading
        if (!loading) {
            if (!authData && rootSegment[0] !== "(auth)") {
                router.replace("/(auth)/SignUp");
            } else if (authData && rootSegment[0] !== "(app)") {
                router.replace("/(tabs)");
            }
        }
    }, [authData, loading]);

    return (
        <AuthContext.Provider value={{ authData, loading, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;