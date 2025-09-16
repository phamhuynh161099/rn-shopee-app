import Overlay from "@/components/overlay";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

const WIDTH_CELL = Dimensions.get("window").width / 6;
const VerifyPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const onHandleCellTextChange = (text: string) => {
    console.log(text);
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
            autoFocus
            numberOfDigits={5}
            onTextChange={(text) => console.log(text)}
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
    </>
  );
};

export default VerifyPage;

const styles = StyleSheet.create({});
