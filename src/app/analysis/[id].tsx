import { router, useLocalSearchParams } from "expo-router";
import { Pressable, View, Text, ScrollView } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import Markdown from 'react-native-markdown-display';
import { useEffect, useState } from "react";
import { getAnalysisById } from "@/storage/analysisStorage";

export default function AnalysisDetail(){
    const { id } = useLocalSearchParams();
    const [analysis, setAnalysis] = useState<any | null>(null);

    useEffect(() => {
        async function load() {
            const item = await getAnalysisById(id);
            setAnalysis(item);
        }
        load();
    }, [id]);
    
    if (!analysis) {
    return (
            <SafeAreaView className="bg-bg flex-1">
                <View className="px-4">
                    <Pressable 
                            className="flex-row w-12 h-12 items-center justify-center bg-card border-border border-[1px] self-start rounded-full mt-4"
                            onPress={() => router.push('/')}
                        >
                            <FontAwesome5 name="chevron-left" size={18} color="#A1A1AA" />
                    </Pressable>
                    <Text className="text-xl top-72 text-center text-title mt-4">Análise não encontrada</Text>
                </View>
            </SafeAreaView>
        );
    }

    return(
        <SafeAreaView className="flex-1 bg-bg">
            <View className="px-4">
                <View className="mt-4">
                    <Pressable 
                        className="flex-row w-12 h-12 items-center justify-center bg-card border-border border-[1px] self-start rounded-full"
                        onPress={() => router.push('/')}
                    >
                        <FontAwesome5 name="chevron-left" size={18} color="#A1A1AA" />
                    </Pressable>
                <ScrollView className="mt-4 mb-24">
                    <Text className="text-3xl font-medium text-title mb-2">{analysis.titulo}</Text>
                    <Text className="text-sm text-detail mb-4">{analysis.data}</Text>
                    <Markdown 
                        style={{
                            body: {
                            fontSize: 16,
                            lineHeight: 24,
                            color: "#A1A1AA",
                            },
                            heading1: {
                            color: "#F4F4F5",
                            fontSize: 24,
                            lineHeight: 32,
                            fontWeight: "bold",
                            marginTop: 16,
                            marginBottom: 8,
                            },
                            heading2: {
                            color: "#F4F4F5",
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
                            backgroundColor: "#1A1A1F",
                            color: "#F4F4F5",
                            borderLeftWidth: 4,
                            borderLeftColor: "#F2C45E",
                            paddingLeft: 12,
                            marginVertical: 10,
                            },
                        }}
                    >
                        {analysis.descricao}
                    </Markdown>
                </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}