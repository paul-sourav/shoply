import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
