import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="fake-home"
        options={{ title: "No Notes", headerShown: false }}
      />
    </Stack>
  );
};

export default AuthLayout;
