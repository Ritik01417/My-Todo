import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import index from '.';
import { useEffect } from 'react';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(()=>{
    SplashScreen.hideAsync();
  },[])
  return (
      <Stack screenOptions={{headerShown: false}}>
       <Stack.Screen name="index" />
      </Stack>
      
  );
}
