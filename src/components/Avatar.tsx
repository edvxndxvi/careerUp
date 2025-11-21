import { useRouter } from 'expo-router';
import { Pressable, Image, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export function AvatarButton() {
    const router = useRouter();
    return(
        <Pressable onPress={() => router.push("profile")}>
            <Image source={require('../../assets/avatar.png')} className="h-12 w-12 rounded-full"/> 
        </Pressable>
    )
}

export function Avatar(){
    return(
        <Image source={require('../../assets/avatar.png')} className="h-32 w-32 rounded-full self-center relative"/>
    )
}