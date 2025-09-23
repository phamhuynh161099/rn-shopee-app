import { useCurrentApp } from "@/context/app.context";
import { APP_COLOR } from "@/utils/constant";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ItemQuantity = ({
  menuItem,
  restaurant,
}: {
  menuItem: any;
  restaurant: any;
}) => {
  const { cart, setCart } = useCurrentApp();

  const handlePressItem = (item: any, action: "ADD" | "MINUS") => {
    if (item.options.length > 0) {
      router.navigate("/product/create.modal");
    } else {
      if (restaurant?._id) {
        const total = action === "MINUS" ? -1 : 1;
        if (!cart[restaurant._id]) {
          cart[restaurant._id] = {
            sum: 0,
            quantity: 0,
            items: {},
          };
        }

        //* Xu ly san pham
        cart[restaurant._id].sum =
          cart[restaurant._id].sum + total * item.basePrice;
        cart[restaurant._id].quantity = cart[restaurant._id].quantity + total;

        console.log("::handlePressItem>>", cart[restaurant._id], item);

        //* Check san pham da tung them vao chua
        if (!cart[restaurant._id].items[item._id]) {
          cart[restaurant._id].items[item._id] = {
            data: menuItem,
            quantity: 0,
          };
        }

        cart[restaurant._id].items[item._id] = {
          data: menuItem,
          quantity: cart[restaurant._id].items[item._id].quantity + total,
        };

        if (cart[restaurant._id].items[item._id].quantity <= 0) {
          delete cart[restaurant._id].items[item._id];
        }

        setCart((prev: any) => ({ ...prev, cart }));
      }
    }

    console.log("cart");
  };

  let showMinus = false;
  let quantity = 0;
  if (restaurant?._id) {
    const store = cart[restaurant?._id];
    if (store?.items && store?.items[menuItem._id]) {
      showMinus = true;
      quantity = cart[restaurant?._id].items[menuItem._id].quantity;
    }
  }

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
            {showMinus && (
              <>
                <Pressable
                  className="bg-orange-300/50 p-2 rounded-md"
                  style={({ pressed }) => ({
                    opacity: pressed === true ? 0.1 : 1,
                    alignSelf: "flex-start",
                  })}
                  onPress={() => handlePressItem(menuItem, "MINUS")}
                >
                  <Ionicons
                    name="code-outline"
                    size={24}
                    color={APP_COLOR.ORANGE}
                  />
                </Pressable>
                <View className="p-2 border rounded-md w-[40]">
                  <Text className="text-center">{quantity}</Text>
                </View>
              </>
            )}
            <Pressable
              className="bg-orange-300/50 p-2 rounded-md"
              onPress={() => handlePressItem(menuItem, "ADD")}
            >
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
