import { Text, Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
const icons = require("../../constants/icons");

const Home = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary">
      <View className="items-center justify-center">
        <Text className="text-lg font-bold text-secondary">Home</Text>
        <Text className="text-lg font-bold text-secondary">Home</Text>
        <Text className="text-lg font-bold text-secondary">Home</Text>
        <Image source={icons?.home} className="w-16 h-16 mt-4" />
      </View>

      {/* Dummy data to make the ScrollView scrollable */}
      <View className="mt-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <Text key={index} className="text-base text-secondary my-2">
            Dummy Text {index + 1}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;
