import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import Passcode from "./(auth)/passcode";
import CreatePasscode from "./(auth)/create-passcode";

const Index = () => {
  const [passcodeExists, setPasscodeExists] = useState(null);

  useEffect(() => {
    const checkPasscode = async () => {
      const storedPasscode = await SecureStore.getItemAsync("userPasscode");
      setPasscodeExists(!!storedPasscode);
    };

    checkPasscode();
  }, []);

  if (passcodeExists === null) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-red-200">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center text-white bg-primary">
      {passcodeExists ? (
        <Passcode></Passcode>
      ) : (
        <CreatePasscode></CreatePasscode>
      )}
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
};

export default Index;
