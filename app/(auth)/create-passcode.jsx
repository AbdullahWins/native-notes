import React, { useState } from "react";
import { Text, ScrollView, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";

const CreatePasscode = () => {
  const [passcode, setPasscode] = useState("");
  const [confirmPasscode, setConfirmPasscode] = useState("");
  const router = useRouter();

  const handleSetPasscode = async () => {
    if (passcode === confirmPasscode) {
      await SecureStore.setItemAsync("userPasscode", passcode);
      router.push("/passcode");
    } else {
      alert("Passcodes do not match. Please try again.");
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary w-full">
      <Text className="text-secondary pb-2 font-bold text-lg">
        Create Passcode
      </Text>
      <CustomInput
        value={passcode}
        onChangeText={setPasscode}
        secureTextEntry
        keyboardType="numeric"
        placeholder="Enter passcode"
        containerStyles=""
      />
      <CustomInput
        value={confirmPasscode}
        onChangeText={setConfirmPasscode}
        secureTextEntry
        keyboardType="numeric"
        placeholder="Confirm passcode"
        containerStyles="my-2"
      />
      <CustomButton
        title="Submit"
        handlePress={handleSetPasscode}
        containerStyles="w-1/2 mt-2"
      />
    </SafeAreaView>
  );
};

export default CreatePasscode;
