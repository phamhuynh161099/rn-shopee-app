import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextBetweenLine = () => {
  return (
    <View className="flex flex-row gap-3 items-center">
      <View className="h-1 flex-1 bg-orange-300"></View>
      <Text className="text-xl font-normal text-black">Login With</Text>
      <View className="h-1 flex-1 bg-orange-300"></View>
    </View>
  );
};

export default TextBetweenLine;

const styles = StyleSheet.create({});
