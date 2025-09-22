import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

const CreateModal = () => {
  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#00000040",
      }}

    //   className="bg-sky-100/10"
    >
      {/* Dismiss modal when pressing outside */}
      <Pressable
        onPress={() => router.back()}
        className="bg-transparent"
        style={StyleSheet.absoluteFill}
      />
      <Animated.View
        entering={SlideInDown}
        style={{
          width: "100%",
          height: "80%",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          Modal Screen
        </Text>
        <Pressable onPress={() => router.back()} />
      </Animated.View>
    </Animated.View>
    // <View className="h-8 bg-transparent">
    //     <Text>1111</Text>
    // </View>
  );
};

export default CreateModal;

const styles = StyleSheet.create({});
