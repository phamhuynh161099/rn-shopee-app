import ShareButton from "@/components/button/share-button";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const WelcomePage = () => {
  return (
    <View className="flex-1">
      <View className="h-[60%] flex justify-center px-4 gap-4">
        <Text className="text-5xl font-bold">Welcom to</Text>
        <Text className="text-4xl text-orange-300">@Sakata - Food</Text>
        <Text>Demo food app</Text>
      </View>

      <View className="h-[40%] px-10">
        <View className="relative border-b-2 border-orange-300 my-5">
          <View className="flex flex-row absolute left-[50%]">
            <Text className="text-center bg-red-100">Login with</Text>
          </View>
        </View>

        <View className="flex flex-row justify-between">
          <ShareButton
            title="Facebook"
            onPress={() => {}}
            textStyle="text-white font-bold"
            blockStyle="bg-[#f4511e]"
            icon={<Ionicons name="logo-facebook" size={32} />}
          />
          <ShareButton
            title="Google"
            onPress={() => {}}
            textStyle="text-white font-bold"
            blockStyle="w-[50%] justify-center bg-[#f4511e]"
            icon={<Ionicons name="logo-google" size={32} />}
          />
        </View>

        <View className="mt-2">
          <ShareButton
            title="Login with email"
            onPress={() => {}}
            textStyle="text-white font-bold"
            blockStyle="w-[100%] justify-center bg-[#f4511e]"
          />
        </View>

        <View>
          <Text>You dont have account? Register</Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomePage;
