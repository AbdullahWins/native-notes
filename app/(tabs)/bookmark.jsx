import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary">
      <Text className="text-secondary">Bookmark</Text>
    </SafeAreaView>
  );
};

export default Bookmark;
