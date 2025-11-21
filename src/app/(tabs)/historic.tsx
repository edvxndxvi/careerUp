import AnalysisHistoryCard from "@/components/AnalysisHistoryCard";
import { Analysis, getAnalyses } from "@/storage/analysisStorage";
import { useFocusEffect } from "expo-router";
import React from "react";
import { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function limitarTexto(texto: string, limite: number) {
  const plain = texto.replace(/[#>*_\-\n]/g, " ").replace(/\s+/g, " ");
  return plain.length > limite ? plain.substring(0, limite) + "..." : plain;
}

export default function Historic(){
    const [history, setHistory] = useState<Analysis[]>([]);
    async function load() {
        const data = await getAnalyses();
        setHistory(data);
    }
    
    useFocusEffect(
        React.useCallback(() => {
            load();
            return () => {};
        }, [])
    );

    return(
        <SafeAreaView className="bg-bg flex-1">
            <View className="px-4 mt-4">
                <Text className="text-2xl font-medium text-title mb-4">Histórico de Análises</Text>
                {history.length > 0 ? (
                <FlatList
                    data={history}
                    numColumns={2}
                    columnWrapperStyle={{ gap: 8 }} 
                    contentContainerStyle={{ gap: 8, paddingBottom: 20 }} 
                    renderItem={({ item }) => (
                    <AnalysisHistoryCard
                        id={item.id}
                        titulo={item.titulo}
                        preview={limitarTexto(item.descricao, 100)}
                        data={item.data}
                    />
                    )}
                />
                ) : (
                <View className="top-80">
                    <Text className="text-textSecondary text-center">
                        Você ainda não gerou nenhuma análise.
                    </Text>
                </View>
                )}
            </View>
        </SafeAreaView>
    )
}