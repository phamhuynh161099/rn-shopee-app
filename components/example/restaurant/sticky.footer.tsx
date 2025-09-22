import { useCurrentApp } from "@/context/app.context";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const StickyFooter = ({ restaurant }: { restaurant: any }) => {
  const { cart } = useCurrentApp();

  const getSum = () => {
    if (restaurant && cart[restaurant._id]) {
      return cart[restaurant._id].sum;
    }
    return 0;
  };

  return (
    <>
      {getSum() === 0 ? (
        <></>
      ) : (
        <View className="absolute bottom-0 left-0 right-0 h-[50] z-[9999] bg-white">
          <View className="flex flex-row ">
            <View className="grow p-2">
              <View className="h-full flex flex-row justify-between items-center">
                <View className="relative">
                  <Pressable onPress={() => alert("Cart")}>
                    <Ionicons name="card" size={40} color="orange" />
                  </Pressable>
                  <View
                    className="p-2 bg-orange-400 rounded-full absolute size-7"
                    style={{ right: -10, top: -10 }}
                  >
                    <Text className="text-white text-xs">
                      {cart &&
                        restaurant &&
                        cart[restaurant?._id] &&
                        cart[restaurant?._id]["quantity"] && (
                          <>{cart[restaurant?._id]["quantity"]}</>
                        )}
                    </Text>
                  </View>
                </View>

                <Text className="text-orange-400">12500d</Text>
              </View>
            </View>

            <Pressable
              onPress={() => {
                alert("Ship");
              }}
            >
              <View className="w-[100] h-full bg-orange-300 flex items-center justify-center">
                <Pressable>
                  <Text>Ship</Text>
                </Pressable>
              </View>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default StickyFooter;

const styles = StyleSheet.create({});
