import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { SafeAreaView } from "react-native-safe-area-context";

const Passcode = () => {
  const [passcode, setPasscode] = useState("");
  const router = useRouter();

  const verifyPasscode = async () => {
    const storedPasscode = await SecureStore.getItemAsync("userPasscode");
    if (storedPasscode === passcode) {
      router.push("/home");
    } else {
      router.push("/fake-home");
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary w-full">
      <Text className="text-secondary pb-2 font-bold text-lg">Passcode</Text>
      <CustomInput
        value={passcode}
        onChangeText={setPasscode}
        secureTextEntry
        keyboardType="numeric"
        placeholder="Enter passcode"
        containerStyles="mb-2"
      ></CustomInput>
      <CustomButton
        title="Submit"
        handlePress={verifyPasscode}
        containerStyles="w-1/2"
      />
    </SafeAreaView>
  );
};

export default Passcode;
