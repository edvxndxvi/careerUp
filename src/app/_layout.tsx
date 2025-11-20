import '@/styles/global.css';
import { Stack } from "expo-router";
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="analysis/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="analysis/confirm" options={{ headerShown: false }} />
        <Stack.Screen name="analysis/loading" options={{ headerShown: false }} />
        <Stack.Screen name="analysis/error" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}