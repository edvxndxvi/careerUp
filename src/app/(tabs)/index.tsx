import { AvatarButton } from "@/components/Avatar";
import {  Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewAnalysisCard from "@/components/NewAnalysisCard";
import AnalysisHistoryCard from "@/components/AnalysisHistoryCard";
import { useState } from "react";
import { Analysis, getAnalyses } from "@/storage/analysisStorage";
import { useFocusEffect } from "expo-router";
import React from "react";
import { FutureTrendCard } from "@/components/FutureTrendCard";


function limitarTexto(texto: string, limite: number) {
  const plain = texto.replace(/[#>*_\-\n]/g, " ").replace(/\s+/g, " ");
  return plain.length > limite ? plain.substring(0, limite) + "..." : plain;
}

export default function Index(){
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
        <SafeAreaView className="flex-1 bg-bg">
            <ScrollView className="px-4 mt-4">
                <View className="flex-row justify-between items-center">
                    <Text className="text-2xl font-medium text-title">Bem-vindo de volta!</Text>
                    <AvatarButton/>
                </View>
                <NewAnalysisCard/>
                <View className="mt-6">
                    <Text className="text-xl font-medium mt-2 mb-4 text-title">Tendências em Alta</Text>
                     <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="py-2"
                    >
                        <FutureTrendCard
                            emoji="🔍"
                            title="Prompt Engineering"
                            description="Construção de prompts otimizados para IA generativa."
                            tag="#IA #LLMs"
                        />

                        <FutureTrendCard
                            emoji="🧠"
                            title="RAG Systems"
                            description="Integração de IA com bases vetoriais e pipelines de contexto."
                            tag="#AI #VectorDB"
                        />

                        <FutureTrendCard
                            emoji="📦"
                            title="MLOps"
                            description="Deploy, monitoramento e CI/CD para modelos de Machine Learning."
                            tag="#DevOps #ML"
                        />

                        <FutureTrendCard
                            emoji="📊"
                            title="Data Modeling"
                            description="Modelagem eficiente para data lakes e arquiteturas analíticas."
                            tag="#DataEngineering"
                        />

                        <FutureTrendCard
                            emoji="☁️"
                            title="Snowflake SQL"
                            description="Otimização, pipelines e práticas avançadas em cloud data warehouses."
                            tag="#Cloud #Data"
                        />

                        <FutureTrendCard
                            emoji="🔗"
                            title="ETL/ELT com dbt"
                            description="Modelagem e transformações modernas com dbt Core & Cloud."
                            tag="#DataPipelines"
                        />

                        <FutureTrendCard
                            emoji="🧩"
                            title="Micro-frontends"
                            description="Arquitetura modular para grandes aplicações web."
                            tag="#Frontend"
                        />

                        <FutureTrendCard
                            emoji="📱"
                            title="React Native Performance"
                            description="Renderização otimizada, memos e animações fluidas."
                            tag="#Mobile"
                        />

                        <FutureTrendCard
                            emoji="🛡️"
                            title="Zero Trust Security"
                            description="Autenticação contínua e segurança descentralizada."
                            tag="#CyberSec"
                        />

                        <FutureTrendCard
                            emoji="⚙️"
                            title="Infra as Code"
                            description="Automação de infra com Terraform, Pulumi e CDK."
                            tag="#DevOps"
                        />
                    </ScrollView>
                </View>
                {history.length > 0 && (
                <View className="mt-6">
                    <Text className="text-xl font-medium text-title mb-4">Últimas Análises</Text>

                    <View className="flex-row gap-2">
                    {history.slice(0, 2).map((a) => (
                        <AnalysisHistoryCard
                        key={a.id}
                        id={a.id}
                        titulo={a.titulo}
                        preview={limitarTexto(a.descricao, 100)}
                        data={a.data}
                        />
                    ))}
                    </View>
                </View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}