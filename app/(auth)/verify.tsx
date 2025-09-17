import Overlay from "@/components/overlay";
import { verifyCode } from "@/utils/api";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, Keyboard, StyleSheet, Text, View } from "react-native";
import { OtpInput, OtpInputRef } from "react-native-otp-entry";
import ToastManager, { Toast } from "toastify-react-native";

const WIDTH_CELL = Dimensions.get("window").width / 7;
const VerifyPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const otpRef = React.useRef<OtpInputRef>(null);
  const { email } = useLocalSearchParams();

  const onHandleCellTextChange = async (text: string) => {
    if (text && text.length === 6) {
      Keyboard.dismiss();
      setIsSubmitting(true);
      const response = await verifyCode(email as string, text);
      setIsSubmitting(false);

      if (response.data) {
        Toast.success("Verify success");
        otpRef.current?.clear();
        router.navigate("/(auth)/login");
      } else {
        Toast.error((response as any).message);
      }
    }
  };

  return (
    <>
      <View className="p-4 flex-1">
        <Text className="text-4xl font-bold">Verify Code</Text>
        <Text className="mt-4 text-black">
          Please input verify-code, it's been sent to your email.
        </Text>
        <View className="mt-2">
          <OtpInput
            ref={otpRef}
            autoFocus
            numberOfDigits={6}
            onTextChange={onHandleCellTextChange}
            theme={{
              containerStyle: {
                padding: 10,
              },
              pinCodeContainerStyle: {
                width: WIDTH_CELL,
              },
            }}
          />
        </View>
      </View>

      {isSubmitting && <Overlay />}
      <ToastManager />
    </>
  );
};

export default VerifyPage;

const styles = StyleSheet.create({});
