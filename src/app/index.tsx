import { AvatarButton } from "@/components/Avatar";
import {  ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewAnalysisCard from "@/components/NewAnalysisCard";
import AnalysisHistoryCard from "@/components/AnalysisHistoryCard";

const analises = [
    {
        id: 1,
        titulo: "Potencial e Direcionamento de Carreira em Engenharia de Dados",
        preview: "Seu perfil demonstra boa base técnica em Python e SQL, com curiosidade natural para entender o fluxo de dados e criar soluções automatizadas. No entanto, para acompanhar as tendências do mercado...",
        data: "1 dia atras"
    },
    {
        id: 2,
        titulo: "Evoluindo de Estagiário para Engenheiro de Dados Júnior",
        preview: "Sua trajetória mostra evolução constante em manipulação de dados e aprendizado rápido em ambientes técnicos. Para se destacar no próximo passo da carreira, é importante aprimorar práticas de...",
        data: "01/01/2023"
    },
    {
        id: 3,
        titulo: "Preparação para o Futuro da Engenharia de Dados",
        preview: "O mercado de dados está cada vez mais orientado à automação e governança. Seu perfil técnico está bem direcionado, mas é recomendável desenvolver competências em modelagem de dados para...",
        data: "01/01/2023"
    }
]

export default function Index(){
    return(
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-4 mt-4">
                <View className="flex-row justify-between items-center">
                    <Text className="text-2xl font-medium">Bem-vindo de volta!</Text>
                    <AvatarButton/>
                </View>
                <NewAnalysisCard/>
                <View className="mt-6">
                    <Text className="text-xl font-medium mt-4">Histórico</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-4">
                        {analises.map((a) => (
                        <AnalysisHistoryCard key={a.id} titulo={a.titulo} preview={a.preview} data={a.data}/>
                        ))}
                    </ScrollView>
                </View>
                <View className="mt-6 mb-10">
                    <Text className="text-xl font-medium mt-2 mb-4">Tendências Futuras</Text>
                    <View className="bg-gradient-to-r from-purple-600 to-indigo-500  rounded-xl">
                        <View className="bg-white rounded-2xl p-4 mb-3 shadow-md w-full">
                            <Text className="text-lg font-semibold text-indigo-700">Domínio de Cloud Data Platforms ☁️</Text>
                            <Text className="text-gray-600 mt-1">
                                Habilidades com ferramentas como BigQuery, Snowflake e Databricks estão entre as mais valorizadas...
                            </Text>
                            <Text className="text-xs text-gray-400 mt-2">#Cloud #Infraestrutura</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}