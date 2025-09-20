import { APP_COLOR } from "@/utils/constant";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ItemQuantity = ({ menuItem }: { menuItem: any }) => {
  return (
    <View className="flex flex-row">
      <View className="w-[100]">
        <Image
          source={{
            uri: `http://10.0.2.2:8080/images/menu-item/${menuItem.image}`,
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View className="flex-1 p-2">
        <Text className="font-bold text-base">{menuItem.title}</Text>
        <Text className="text-gray-500 text-sm">{menuItem.description}</Text>
        <View className="flex flex-row justify-between">
          <Text className="text-orange-500 font-bold text-base mt-2">
            {menuItem.basePrice} đ
          </Text>
          <View className="flex flex-row gap-1">
            <Pressable className="bg-orange-300/50 p-2 rounded-md">
              <Ionicons
                name="code-outline"
                size={24}
                color={APP_COLOR.ORANGE}
              />
            </Pressable>
            <View className="p-2 border rounded-md w-[40]">
              <Text className="text-center">1</Text>
            </View>
            <Pressable className="bg-orange-300/50 p-2 rounded-md">
              <Ionicons name="add" size={24} color={APP_COLOR.ORANGE} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemQuantity;

const styles = StyleSheet.create({});
