import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return (
              <Ionicons name="fast-food-outline" size={size} color={color} />
            );
          },
          headerShown: false,
          tabBarLabelStyle: { paddingBottom: 3 },
          tabBarActiveTintColor: "f4511e",
        })}
      >
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name="order" options={{ headerShown: false }} />
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
