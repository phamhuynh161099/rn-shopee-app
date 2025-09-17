import ShareButton from "@/components/button/share-button";
import ShareInput from "@/components/input/share-input";
import TextBetweenLine from "@/components/text-between-line";
import { loginAPI } from "@/utils/api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toast } from "toastify-react-native";

const LoginPage = () => {
  const URL_BACKEND = process.env.EXPO_PUBLIC_API_URL;
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleLogin = async () => {
    try {
      console.log("start handle");
      const response = await loginAPI(email, password);
      if (response.data) {
        router.navigate({
          pathname: "/(tabs)"
        });
      } else {
        Toast.error((response as any).message);
      }
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 gap-8 p-5">
        <View className="">
          <Text className="text-4xl font-bold text-black line-height-1">
            Login
          </Text>
        </View>

        <ShareInput
          title="Email"
          keyboardType="email-address"
          value={email}
          setValue={setEmail}
        />

        <ShareInput
          title="Password"
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />

        <View className="w-full justify-center items-center">
          <ShareButton
            title="Login"
            onPress={() => {
              handleLogin();
            }}
            textStyle="text-white font-semibold"
            blockStyle="w-[80%] justify-center bg-[#f4511e]"
          />
        </View>

        <View className="flex flex-row justify-center">
          <Text className="text-black">
            You dont have account?{" "}
            <Link href={"/(auth)/signup"}>
              <Text className="underline underline-offset-1">Register</Text>
            </Link>
          </Text>
        </View>

        <View>
          <TextBetweenLine />
        </View>

        <View className="flex flex-row justify-between gap-4">
          <ShareButton
            title="Facebook"
            onPress={() => {}}
            textStyle="text-white font-bold"
            blockStyle="flex-1 bg-[#f4511e]"
            icon={<Ionicons name="logo-facebook" size={32} color={"white"} />}
          />
          <ShareButton
            title="Google"
            onPress={() => {}}
            textStyle="text-white font-bold"
            blockStyle="flex-1 justify-center bg-[#f4511e]"
            icon={<Ionicons name="logo-google" size={32} color={"white"} />}
          />
        </View>
      </View>

      {/* <ToastManager /> */}
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
