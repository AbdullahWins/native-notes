import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="passcode"
        options={{ title: "Enter Passcode", headerShown: false }}
      />
      <Stack.Screen
        name="create-passcode"
        options={{ title: "Create Passcode", headerShown: false }}
      />
    </Stack>
  );
};

export default AuthLayout;
