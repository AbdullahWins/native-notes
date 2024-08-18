import { View, Text, Image } from "react-native";
import React from "react";
const { home } = require("../../constants/icons");

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Image source={home} />
    </View>
  );
};

export default Home;
