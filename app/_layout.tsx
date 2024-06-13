import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();



  // load custom fonts and assign them to string variable names 
  const [loaded] = useFonts({
    "light": require('../assets/fonts/Montserrat-Light.ttf'),
    "primary": require('../assets/fonts/Montserrat-Black.ttf'),
    "regular": require('../assets/fonts/Montserrat-Regular.ttf'),
    "semiBold": require('../assets/fonts/Montserrat-SemiBold.ttf'),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar
        style={colorScheme === 'dark' ? "dark" : 'dark'}
      />
      <Slot />
    </ThemeProvider>
  );
}
