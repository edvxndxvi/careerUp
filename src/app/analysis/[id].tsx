import { router, useLocalSearchParams } from "expo-router";
import { Pressable, View, Text, ScrollView } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { analises } from "../../data/analises";
import Markdown from 'react-native-markdown-display';

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
                <ScrollView className="mt-4 mb-24">
                    <Text className="text-3xl font-medium text-title mb-2">{analise.titulo}</Text>
                    <Text className="text-sm text-detail mb-4">{analise.data}</Text>
                    <Markdown 
                        style={{
                            body: {
                            fontSize: 16,
                            lineHeight: 24,
                            color: "#6E6E73",
                            },
                            heading1: {
                            color: "#1A1A1E",
                            fontSize: 24,
                            lineHeight: 32,
                            fontWeight: "bold",
                            marginTop: 16,
                            marginBottom: 8,
                            },
                            heading2: {
                            color: "#1A1A1E",
                            fontSize: 20,
                            fontWeight: "bold",
                            marginTop: 16,
                            marginBottom: 8,
                            },
                            paragraph: {
                            marginBottom: 12,
                            },
                            bullet_list: { marginBottom: 10 },
                            ordered_list: { marginBottom: 10 },
                            bullet_list_item: { marginBottom: 6 },
                            ordered_list_item: { marginBottom: 6 },
                            blockquote: {
                            borderLeftWidth: 4,
                            borderLeftColor: "#F2C45E",
                            paddingLeft: 12,
                            marginVertical: 10,
                            },
                        }}
                    >
                        {analise.descricao}
                    </Markdown>
                </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}