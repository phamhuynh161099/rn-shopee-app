import { useCurrentApp } from "@/context/app.context";
import { getAccountAPI } from "@/utils/api";
import { ErrorBoundaryProps, router } from "expo-router";
import React, { useEffect } from "react";

import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
// Set the animation options. This is optional.
// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });
SplashScreen.preventAutoHideAsync();

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <>
      <View className="flex-1 bg-sky-300">
        <Text>{error.message}</Text>
      </View>
    </>
  );
}

const RootPage = () => {
  // if (1) {
  //   return <Redirect href={"/(tabs)"} />;
  // } else {
  // }
  const { setAppState } = useCurrentApp();
  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await getAccountAPI();
        if (response.data) {
          console.log("account::infor", response.data);
          setAppState({
            user: response.data,
          });
          router.navigate("/(tabs)");
        } else {
          router.navigate("/(auth)/welcome");
        }
      } catch (error) {
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    fetchAccount();
  }, []);

  return <></>;
};

export default RootPage;
