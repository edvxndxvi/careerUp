import { View, Text } from "react-native";

export function FutureTrendCard({
  title,
  emoji,
  tag,
  description,
}: {
  title: string;
  emoji: string;
  tag: string;
  description: string;
}) {
  return (
    <View className="bg-card rounded-2xl px-4 py-2 mr-3 border border-border w-52">
      <Text className="text-2xl mb-1">{emoji}</Text>
      <Text className="text-base font-semibold text-title">{title}</Text>
      <Text className="text-xs text-textSecondary mt-1">{description}</Text>
      <Text className="text-[10px] text-detail mt-2">{tag}</Text>
    </View>
  );
}