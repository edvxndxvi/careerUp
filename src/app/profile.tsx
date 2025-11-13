import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';
import { router } from "expo-router";
import { Avatar } from "@/components/Avatar";

export default function Profile(){
    return(
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-4 mt-4">
                <Pressable 
                    className="flex-row gap-4 items-center"
                    onPress={() => router.back()}
                >
                    <FontAwesome5 name="chevron-left" size={18} color="black" />
                    <Text className="text-2xl font-medium">Voltar</Text>
                </Pressable>
            </View>
            <View className="mt-8">
                <Avatar/>
                <Text className="text-center text-2xl font-medium mt-4">Nome Conta</Text>
            </View>
        </SafeAreaView>
    )
}