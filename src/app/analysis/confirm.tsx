import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useRouter, router } from 'expo-router';
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ConfirmScreen() {
  const router = useRouter();
  const [objetivo, setObjetivo] = useState("");
  const [erro, setErro] = useState(false);

  const user = {
    area: "Desenvolvedora Frontend",
    habilidades: ["React", "TypeScript", "UI/UX"],
    experiencias: [
      {
        cargo: "Frontend Jr",
        empresa: "TechCorp",
        periodo: "2023 - Atualmente",
      },
    ],
  };



  const iniciarAnalise = () => {
    if (!objetivo.trim()) {
      setErro(true);
      return;
    }

    setErro(false);
    router.push({
      pathname: "/analysis/loading",
      params: { objetivo },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-bg">
      <View className="px-4">
        <View className="mt-4">
          <Pressable
            className="flex-row w-12 h-12 items-center justify-center bg-card border-border border-[1px] self-start rounded-full"
            onPress={() => router.back()}
          >
            <FontAwesome5 name="chevron-left" size={18} color="#A1A1AA" />
          </Pressable>
        </View>
        <Text className="text-title text-2xl font-semibold mt-8 mb-3">
          🎯 Antes de começarmos…
        </Text>

        <Text className="text-textSecondary mb-6">
          Confirme suas informações e defina seu objetivo para uma análise ainda
          mais precisa.
        </Text>

        {/* Card de dados */}
        <View className="bg-card p-5 rounded-2xl border border-border mb-6">
          <Text className="text-title text-lg font-medium mb-2">
            Seu Perfil
          </Text>

          <Text className="text-textSecondary mb-1">Área atual:</Text>
          <Text className="text-title mb-3">{user.area}</Text>

          <Text className="text-textSecondary mb-1">Habilidades:</Text>
          <Text className="text-title mb-3">{user.habilidades.join(", ")}</Text>

          <Text className="text-textSecondary mb-1">Última experiência:</Text>
          <Text className="text-title mb-3">
            {user.experiencias[0].cargo} — {user.experiencias[0].empresa}
          </Text>
        </View>

        {/* Objetivo */}
        <View className="bg-card p-5 rounded-2xl border border-border mb-6">
          <Text className="text-title font-medium mb-2">
            Seu objetivo profissional
          </Text>

          <TextInput
            placeholder="Ex: Me tornar Desenvolvedor Pleno"
            placeholderTextColor="#8E8E93"
            value={objetivo}
            onChangeText={(text) => {
              setObjetivo(text);
              if (erro) setErro(false);
            }}
            className={`bg-bg p-4 rounded-xl text-title border ${
              erro ? "border-red-500" : "border-border"
            }`}
          />

          {erro && (
            <Text className="text-red-500 mt-2 text-sm">
              Defina um objetivo antes de continuar.
            </Text>
          )}
        </View>

        {/* Botões */}
        <View className="flex-row justify-between mt-4">
          <Pressable
            onPress={() => router.push("profile")}
            className="px-5 py-3 bg-card border border-border rounded-xl"
          >
            <Text className="text-textSecondary">Revisar Perfil</Text>
          </Pressable>

          <Pressable
            onPress={iniciarAnalise}
            className="px-5 py-3 bg-accent rounded-xl"
          >
            <Text className="text-title font-semibold">Continuar</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
