import { View, Text, TouchableOpacity, ImageBackground, } from "react-native";
import { FontAwesome5  } from '@expo/vector-icons';
import { useRouter } from "expo-router";
export default function NewAnalysisCard(){
    const router = useRouter();
    
    return(
        <ImageBackground 
            className=" mt-6 rounded-[32px] p-4" 
            imageStyle={{ borderRadius: 32 }}
            source={require('../../assets/analysisCardBg.jpg')}
        >
            <View className="flex-row gap-2 items-center">
                <View className="h-10 w-10 bg-white items-center justify-center rounded-full">
                    <FontAwesome5 name="brain" size={18} color="#7A5AF5"/>
                </View>
                <Text className="text-white text-xl font-medium">Análise Inteligente do Perfil</Text>
            </View>
            <Text className="text-indigo-50 my-5 w-9/12">Descubra como evoluir na sua carreira com base no seu perfil e nas tendências futuras.</Text>
            <TouchableOpacity className="bg-white block py-4 px-6 rounded-full self-start" onPress={() => router.push('analysis/confirm')}>
                <Text className="text-[#7A5AF5] font-semibold">Analisar meu perfil</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}