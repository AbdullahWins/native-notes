import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Text className="bg-red-500 font-PoppinsBlack">Index</Text>
      <StatusBar></StatusBar>
      <Link href="/home">Go to Home</Link>
    </View>
  );
};

export default Index;
