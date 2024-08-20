import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import icons from "../constants/icons";

const CustomInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  secureTextEntry,
  containerStyles,
  ...props
}) => {
  const [showPasscode, setShowPasscode] = useState(false);

  return (
    <View className={`space-y-2 ${containerStyles}`}>
      {title && (
        <Text className="text-white font-psemibold text-lg">{title}</Text>
      )}

      <View className="w-1/2 h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={secureTextEntry && !showPasscode}
          {...props}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPasscode(!showPasscode)}>
            <Image
              source={!showPasscode ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
