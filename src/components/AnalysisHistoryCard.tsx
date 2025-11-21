import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function AnalysisHistoryCard({id, titulo, preview, data}: any){
    const router = useRouter();
    return(
        <TouchableOpacity 
            style={{
                width: screenWidth * 0.45, 
            }} 
            className="rounded-xl bg-card border-[1px] border-border p-4" onPress={() => router.push(`analysis/${id}`)}
        >
            <Text className="font-medium mb-2 text-title">{titulo}</Text>
            <Text className="text-sm text-textSecondary mb-4">{preview}</Text>
            <Text className="text-xs text-detail mt-1">{data}</Text>
        </TouchableOpacity>
    )
}