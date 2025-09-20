import RMain from "@/components/example/restaurant/main";
import { getTopRestaurantByIdAPI } from "@/utils/api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// const PHONE_WIDTH = Dimensions.get("window").width - 100;
const ProductPage = () => {
  const { id } = useLocalSearchParams();
  const [restaurant, setRestaurant] = useState<any | null>(null);

  useLayoutEffect(() => {
    console.log("Layout Effect");
    return () => {};
  }, []);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const res = await getTopRestaurantByIdAPI(id as string);
      console.log(res);
      setRestaurant(res.data);
    };
    fetchRestaurant();

    return () => {};
  }, [id]);

  return (
    <View className="relative">
      <RMain restaurant={restaurant} />

      <View className="absolute bottom-0 left-0 right-0 h-[50] bg-sky-300 z-30">
        <View className="flex flex-row bg-fuchsia-500">
          <View
            className="grow bg-sky-800"
            // style={{
            //   width: PHONE_WIDTH,
            // }}
          >
            <Text>123</Text>
            <Ionicons name="card" size={24} color="black" />
          </View>


          <View className="w-[100] bg-orange-300">
            <Text>Ship</Text>
          </View>


        </View>
      </View>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({});
