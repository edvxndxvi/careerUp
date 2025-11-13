import { Pressable, View, Text, TouchableOpacity, } from "react-native";
import { FontAwesome5  } from '@expo/vector-icons';

export default function NewAnalysisCard(){
    return(
        <View className="bg-indigo-500 backdrop-blur mt-6 rounded-[32px] p-4">
            <View className="flex-row gap-2 items-center">
                <View className="h-10 w-10 bg-white items-center justify-center rounded-full">
                    <FontAwesome5 name="brain" size={18} color="#6366f1"/>
                </View>
                <Text className="text-white text-xl font-medium">Análise Inteligente do Perfil</Text>
            </View>
            <Text className="text-indigo-100 my-5 w-9/12">Descubra como evoluir na sua carreira com base no seu perfil e nas tendências futuras.</Text>
            <Pressable className="bg-white block py-4 px-6 rounded-full self-start">
                <Text className="text-indigo-700 font-semibold">Analisar meu perfil</Text>
            </Pressable>
        </View>
    )
}