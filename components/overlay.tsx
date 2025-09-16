import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Overlay = () => {
  return (
    <View className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center bg-black/40 z-50">
      <ActivityIndicator size={"large"}/>
    </View>
  );
};

export default Overlay;

const styles = StyleSheet.create({});
