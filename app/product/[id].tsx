import RMain from "@/components/example/restaurant/main";
import StickyFooter from "@/components/example/restaurant/sticky.footer";
import { getTopRestaurantByIdAPI } from "@/utils/api";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

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
    <View className="relative flex-1">
      <RMain restaurant={restaurant} />

      <StickyFooter restaurant={restaurant}/>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({});
