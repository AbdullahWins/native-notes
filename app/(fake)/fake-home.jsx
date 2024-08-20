import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const FakeHome = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl font-bold mb-4">You have no notes.</Text>
    </SafeAreaView>
  );
};

export default FakeHome;
