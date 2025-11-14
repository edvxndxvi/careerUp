import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function AnalysisHistoryCard({id, titulo, preview, data}: any){
    return(
        <TouchableOpacity className="rounded-xl bg-card border-[1px] border-border p-4 w-96 mr-3" onPress={() => router.push(`/analysis/${id}`)}>
            <Text className="font-medium mb-2 text-title">{titulo}</Text>
            <Text className="text-sm text-textSecondary mb-4">{preview}</Text>
            <Text className="text-xs text-detail mt-1">{data}</Text>
        </TouchableOpacity>
    )
}