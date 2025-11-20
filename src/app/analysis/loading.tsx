import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const { objetivo } = useLocalSearchParams();
  const [step, setStep] = useState(0);

  const frases = [
    "Analisando suas competências…",
    "Estudando tendências de mercado…",
    "Avaliando suas habilidades mais fortes…",
    "Gerando caminhos de evolução profissional…"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % frases.length);
    }, 1200);

    const timeout = setTimeout(() => {
      router.push({
        pathname: "/analysis/[id].tsx",
        params: { objetivo }
      });
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
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
