import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ErrorScreen() {
    return (
        <SafeAreaView className="bg-bg flex-1">
            <View className="px-4">
                    <View className="mt-4">
                      <Pressable
                        className="flex-row w-12 h-12 items-center justify-center bg-card border-border border-[1px] self-start rounded-full"
                        onPress={() => router.back()}
                      >
                        <FontAwesome5 name="chevron-left" size={18} color="#A1A1AA" />
                      </Pressable>
                    </View>
                    <View>
                        <Text className="text-2xl font-medium text-title mt-4">Ops, algo deu errado!</Text>
                    </View>
            </View>
        </SafeAreaView>
    )
}