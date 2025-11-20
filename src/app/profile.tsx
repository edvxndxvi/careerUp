import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import { Avatar } from "@/components/Avatar";
import { useState } from "react";

export default function Profile() {
  const user = {
    name: "Edvan Davi",
    title: "Profissional em Desenvolvimento",
    objetivo: "Me tornar Desenvolvedor Mobile Pleno",
    habilidades: [
      { nome: "React Native", nivel: "Intermediário" },
      { nome: "Java", nivel: "Básico" },
    ],
    experiencias: [
      {
        cargo: "Dev Jr",
        empresa: "TechCorp",
        periodo: "2023 - Atual",
        atividades: ["Front-end", "Consumo de API"],
      },
    ],
  };

  const [openExp, setOpenExp] = useState<number | null>(null);

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
        <ScrollView className="h-full">
          <View className="items-center mt-8">
            <Avatar />
            <Text className="text-title text-2xl font-bold mt-4">
              {user.name}
            </Text>
            <Text className="text-textSecondary mt-1">{user.title}</Text>
          </View>

          {/* HABILIDADES */}
          <View className="mt-8">
            <Text className="text-title text-xl font-semibold mb-3">
              Suas Habilidades
            </Text>

            <View className="flex-row flex-wrap gap-3">
              {user.habilidades.map((h, i) => (
                <View
                  key={i}
                  className="px-4 py-2 bg-card border border-border rounded-full"
                >
                  <Text className="text-textSecondary">
                    {h.nome} • {h.nivel}
                  </Text>
                </View>
              ))}

              {/* Botão adicionar */}
              <TouchableOpacity className="px-4 py-2 bg-card rounded-full border border-border flex-row items-center gap-2">
                <FontAwesome5 name="plus" size={12} color="#A1A1AA" />
                <Text className="text-textSecondary">Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* EXPERIÊNCIAS */}
          <View className="mt-10">
            <Text className="text-title text-xl font-semibold mb-3">
              {" "}
              Experiências Profissionais
            </Text>

            {user.experiencias.map((exp, i) => (
              <View key={i} className="mb-4">
                <Pressable
                  onPress={() => setOpenExp(openExp === i ? null : i)}
                  className="bg-card border border-border p-4 rounded-2xl"
                >
                  <View className="flex-row justify-between items-center">
                    <View>
                      <Text className="text-title font-medium">
                        {exp.cargo}
                      </Text>
                      <Text className="text-textSecondary text-sm">
                        {exp.empresa} — {exp.periodo}
                      </Text>
                    </View>

                    <FontAwesome5
                      name={openExp === i ? "chevron-up" : "chevron-down"}
                      size={16}
                      color="#A1A1AA"
                    />
                  </View>
                  {openExp === i && (
                    <View className="mt-4">
                      {exp.atividades.map((t, ti) => (
                        <Text key={ti} className="text-textSecondary mb-1">
                          • {t}
                        </Text>
                      ))}
                    </View>
                  )}
                </Pressable>
              </View>
            ))}

            <TouchableOpacity className="flex-row gap-2 items-center mt-2 self-start px-4 py-2 rounded-full border border-border bg-card">
              <FontAwesome5 name="plus" size={12} color="#A1A1AA" />
              <Text className="text-textSecondary">Adicionar experiência</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
