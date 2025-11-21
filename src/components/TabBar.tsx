import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter, router } from 'expo-router';

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const router = useRouter();
  type TabIconProps = {
    color: string;
    size?: number;
    focused?: boolean;
  };

  type IconComponent = React.ComponentType<TabIconProps>;

  const icons: Record<string, IconComponent> = {
    index: ({ color, size = 24 }) => (
      <FontAwesome5 name="home" color={color} size={size} />
    ),
    historic: ({ color, size = 24 }) => (
      <FontAwesome5 name="history" color={color} size={size} />
    ),
  };
  return (
      <View style={styles.container}>
        <View style={styles.tabBar}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];

            if (["_sitemap", "+not-found"].includes(route.name)) return null;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const Icon = icons[route.name];

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={styles.tabItem}
              >
                <Icon
                  color={isFocused ? "#F2C45E" : "#A1A1AA"}
                  size={24}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          onPress={() => router.push("analysis/confirm")}
          style={styles.floatingButton}
        >
          <FontAwesome5 name="brain" size={32} color="#F4F4F5" />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#262626",
    borderTopEndRadius: 48,
    borderTopStartRadius: 48,
  },

  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
    paddingBottom: 28,
    paddingHorizontal: 0,
    marginHorizontal: 40,
    width: "90%",
  },

  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  floatingButton: {
    position: "absolute",
    bottom: 28,   
    justifyContent: "center",
    alignItems: "center",
    width: 64,
    height: 64,
    borderRadius: 35,
    backgroundColor: "#4B3063",
  },
});
