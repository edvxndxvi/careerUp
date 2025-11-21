import TabBar from '@/components/TabBar';
import '@/styles/global.css';
import { Tabs } from "expo-router";
import { StatusBar } from 'react-native';

export default function TabLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen
          name="index"
          options={{ title: "Home", tabBarLabel: () => null }}
        />
        <Tabs.Screen
          name="historic"
          options={{ title: "Historic", tabBarLabel: () => null }}
        />
      </Tabs>      
    </>
  ) 
}