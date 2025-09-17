import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name="like" options={{ headerShown: false }} />
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
