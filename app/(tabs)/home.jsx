import { Text, Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
const icons = require("../../constants/icons");

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center justify-center">
        <Text className="text-lg font-bold">Home</Text>
        <Text className="text-lg font-bold">Home</Text>
        <Text className="text-lg font-bold">Home</Text>
        <Image source={icons?.home} className="w-16 h-16 mt-4" />
      </View>

      {/* Dummy data to make the ScrollView scrollable */}
      <View className="mt-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <Text key={index} className="text-base text-gray-500 my-2">
            Dummy Text {index + 1}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;
