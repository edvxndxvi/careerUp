import { Text, TouchableOpacity } from "react-native";

export default function AnalysisHistoryCard({titulo, preview, data}: any){
    return(
        <TouchableOpacity className="rounded-xl bg-white border-[1px] border-slate-200 p-4 w-96 mr-3">
            <Text className="font-medium mb-2 text-black">{titulo}</Text>
            <Text className="text-sm text-slate-800 mb-4">{preview}</Text>
            <Text className="text-xs text-slate-600 mt-1">{data}</Text>
        </TouchableOpacity>
    )
}