import { getTopRestaurantAPI } from "@/utils/api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface IProps {
  name: string;
  description: string;
  refAPI: string;
}
const CollectionHome = (props: IProps) => {
  const { name, description, refAPI } = props;

  const data = [
    {
      key: 1,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      name: "store 1",
    },
    {
      key: 2,
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      name: "store 2",
    },
    {
      key: 3,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      name: "store 3",
    },
    {
      key: 4,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      name: "store 4",
    },
    {
      key: 5,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      name: "store 4",
    },
  ];

  const [restaurants, setRestaurants] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getTopRestaurantAPI(refAPI);
      if (res.data) {
        setRestaurants(res.data);
      } else {
      }
    };
    fetchData();

    return () => {};
  }, [refAPI]);

  return (
    <View className="h-[300] mb-4 p-2 bg-white elevation-md">
      <View className="flex flex-row justify-between">
        <Text className="text-xl font-bold text-orange-400">{name}</Text>
        <Text>
          View All
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </Text>
      </View>

      <View>
        <Text>{description}</Text>
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurants}
          renderItem={({ item }) => (
            <Pressable
              className="border flex-1"
              onPress={() => {
                router.navigate({
                  pathname: `/product/[id]`,
                  params: { id: item._id },
                })
              }}
            >
              <View className="mr-2 w-[160]  bg-gray-300 box-border p-2">
                <Image
                  className="h-[150] w-[150]"
                  source={{
                    uri: `http://10.0.2.2:8080/images/restaurant/${item.image}`,
                  }}
                />
                <View className="flex justify-between">
                  <Text className="text-wrap line-clamp-2 text-ellipsis">
                    {item.name}
                  </Text>
                  <Text>Price</Text>
                </View>
              </View>
            </Pressable>
          )}
        />

        {/* <Image
          className="h-[150] w-[150]"
          source={{
            uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          }}
        />
        <View className="flex-row justify-between">
          <Text>Name</Text>
          <Text>Price</Text>
        </View> */}
      </View>
    </View>
  );
};

export default CollectionHome;

const styles = StyleSheet.create({});
