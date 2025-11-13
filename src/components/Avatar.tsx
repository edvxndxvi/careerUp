import { router } from "expo-router";
import { Pressable, Image, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export function AvatarButton() {
    return(
        <Pressable onPress={() => router.push("/profile")}>
            {/* <Image source={require('../../assets/avatar.png')} /> */}
            <View className="h-12 w-12 bg-slate-700 rounded-full"/>
        </Pressable>
    )
}

export function Avatar(){
    return(
        <View className="h-32 w-32 bg-slate-700 rounded-full self-center relative">
            <Pressable className="bg-slate-400 self-end p-2 rounded-full absolute bottom-0">
                <FontAwesome5 name="pen" size={18} color="white" />
            </Pressable>
        </View>
    )
}