import { AvatarButton } from "@/components/Avatar";
import {  ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewAnalysisCard from "@/components/NewAnalysisCard";
import AnalysisHistoryCard from "@/components/AnalysisHistoryCard";
import { analises } from "../data/analises";


function limitarTexto(texto: string, limite: number) {
  const plain = texto.replace(/[#>*_\-\n]/g, " ").replace(/\s+/g, " ");
  return plain.length > limite ? plain.substring(0, limite) + "..." : plain;
}

export default function Index(){
    return(
        <SafeAreaView className="flex-1 bg-bg">
            <View className="px-4 mt-4">
                <View className="flex-row justify-between items-center">
                    <Text className="text-2xl font-medium text-title">Bem-vindo de volta!</Text>
                    <AvatarButton/>
                </View>
                <NewAnalysisCard/>
                <View className="mt-6">
                    <Text className="text-xl font-medium mt-4 text-title">Histórico de Análises</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-4">
                        {analises.map((a) => (
                        <AnalysisHistoryCard key={a.id} id={a.id} titulo={a.titulo} preview={limitarTexto(a.descricao, 100)} data={a.data}/>
                        ))}
                    </ScrollView>
                </View>
                <View className="mt-6 mb-10">
                    <Text className="text-xl font-medium mt-2 mb-4 text-title">Tendências Futuras</Text>
                    <View>
                        <View className="bg-card rounded-2xl p-4 mb-3 border-[1px] border-border w-full">
                            <Text className="text-lg font-semibold text-title">Domínio de Cloud Data Platforms ☁️</Text>
                            <Text className="text-textSecondary mt-1">
                                Habilidades com ferramentas como BigQuery, Snowflake e Databricks estão entre as mais valorizadas...
                            </Text>
                            <Text className="text-xs text-detail mt-2">#Cloud #Infraestrutura</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}