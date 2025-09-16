import ShareButton from "@/components/button/share-button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, Redirect } from "expo-router";
import React from "react";
import { ImageBackground, Text, View } from "react-native";

const WelcomePage = () => {
  if (1) {
    return <Redirect href={"/(auth)/verify"} />;
  } else {
  }
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("@/assets/auth/placeholder.jpg")}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={{ flex: 1 }}
        locations={[0.5, 0.8]}
      >
        <View className="flex-1">
          <View className="h-[60%] flex justify-center px-4 gap-4">
            <Text className="text-5xl font-semibold text-white">Welcom to</Text>
            <Text className="text-5xl font-bold text-orange-500">
              @Sakata - Food
            </Text>
            <Text className="text-3xl text-white">Demo food app</Text>
          </View>

          <View className="h-[40%] px-10 gap-4">
            
            <View className="flex flex-row justify-between gap-4">
              <ShareButton
                title="Facebook"
                onPress={() => {}}
                textStyle="text-white font-bold"
                blockStyle="flex-1 bg-[#f4511e]"
                icon={
                  <Ionicons name="logo-facebook" size={32} color={"white"} />
                }
              />
              <ShareButton
                title="Google"
                onPress={() => {}}
                textStyle="text-white font-bold"
                blockStyle="flex-1 justify-center bg-[#f4511e]"
                icon={<Ionicons name="logo-google" size={32} color={"white"} />}
              />
            </View>

            <View className="">
              <ShareButton
                title="Login with email"
                onPress={() => {}}
                textStyle="text-white font-bold"
                blockStyle="w-[100%] justify-center bg-[#f4511e]"
              />
            </View>

            <View className="flex flex-row justify-center">
              <Text className="text-white">
                You dont have account?{" "}
                <Link href={"/(auth)/signup"}>
                  <Text className="underline underline-offset-1">Register</Text>
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default WelcomePage;
