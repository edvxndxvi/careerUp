import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import { analyzeProfile } from "@/services/gemini";

export default function LoadingScreen() {
  const { objetivo } = useLocalSearchParams();
  const [step, setStep] = useState(0);

  const frases = [
    "Analisando suas competências…",
    "Estudando tendências de mercado…",
    "Avaliando suas habilidades mais fortes…",
    "Gerando caminhos de evolução profissional…"
  ];

    const objetivoText = Array.isArray(objetivo) ? objetivo[0] : objetivo ?? "";

    const userData = {
    area: "Desenvolvedor Frontend",
    objetivo: objetivoText,
    habilidades: ["React", "TypeScript", "UI/UX"],
    experiencias: [
      { cargo: "Frontend Jr", empresa: "TechCorp", periodo: "2023 - Atualmente" }
    ]
  };
  

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % frases.length);
    }, 3000);

    async function runAnalysis() {
      try {
        const json = await analyzeProfile(userData);

        router.replace(`/analysis/${json.id}`);
      } catch (e) {
        router.replace("/analysis/error");
      }
    }

    runAnalysis();

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-bg px-10">
      <ActivityIndicator size={50} color="#F2C45E" />

      <Text className="text-title text-xl font-semibold text-center mt-8">
        {frases[step]}
      </Text>
    </View>
  );
}
