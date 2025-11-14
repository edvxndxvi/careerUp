import { router, useLocalSearchParams } from "expo-router";
import { Pressable, View, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { analises } from "../../data/analises";

export default function AnalysisDetail(){
    const { id } = useLocalSearchParams();
    const analise = analises.find((a) => a.id === id);

    if (!analise) {
    return (
            <View className="flex-1 items-center justify-center">
                <Text> Análise não encontrada. </Text>
            </View>
        );
    }

    return(
        <SafeAreaView className="flex-1 bg-bg">
            <View className="px-4">
                <View className="mt-4">
                    <Pressable 
                        className="flex-row w-12 h-12 items-center justify-center bg-card border-border border-[1px] self-start rounded-full"
                        onPress={() => router.back()}
                    >
                        <FontAwesome5 name="chevron-left" size={18} color="#6E6E73" />
                    </Pressable>
                </View>
                <View className="mt-4">
                    <Text>{id}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}