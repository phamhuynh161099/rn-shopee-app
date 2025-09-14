import React from "react";
import { Text, View } from "react-native";

const WelcomePage = () => {
  return (
    <View className="flex-1">
      <View className="flex-[0.6] border">
        <Text>Title</Text>
      </View>

      <View className="flex-[0.4] border">
        <Text>Button</Text>
      </View>
    </View>
  );
};

export default WelcomePage;
