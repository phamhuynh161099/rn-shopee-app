import ShareButton from "@/components/button/share-button";
import ShareInput from "@/components/input/share-input";
import TextBetweenLine from "@/components/text-between-line";
import { registerAPI } from "@/utils/api";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { Link, router } from "expo-router";
import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toast } from "toastify-react-native";

const SignUpPage = () => {
  const URL_BACKEND = process.env.EXPO_PUBLIC_API_URL;
  const [fullName, setFullName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const currentOS = Platform.OS;
        console.log("currentOS", currentOS);
        const response = await axios.get(URL_BACKEND! + "/");
        console.log("response", response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchAPI();

    return () => {};
  }, []);

  const handleSignUp = async () => {
    try {
      const response = await registerAPI(email, password, fullName);
      if (response.data) {
        router.navigate({
          pathname: "/(auth)/verify",
          params: { email: email },
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
            Register Account
          </Text>
        </View>

        <ShareInput title="Full Name" value={fullName} setValue={setFullName} />

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
            title="Register"
            onPress={() => {
              handleSignUp();
            }}
            textStyle="text-white font-semibold"
            blockStyle="w-[80%] justify-center bg-[#f4511e]"
          />
        </View>

        <View className="flex flex-row justify-center">
          <Text className="text-black">
            You already have account?{" "}
            <Link href={"/(auth)/login"}>
              <Text className="underline underline-offset-1">Login</Text>
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

export default SignUpPage;

const styles = StyleSheet.create({});
