import ShareInput from "@/components/input/share-input";
import { useCurrentApp } from "@/context/app.context";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Account = () => {
  const { appState } = useCurrentApp();

  return (
    <View className="flex-1">
      {/* <Text>Account: {JSON.stringify(appState)}</Text> */}
      <View className="items-center justify-center">
        <Image
          className="h-[150px] w-[150px]"
          source={{
            uri: `http://10.0.2.2:8080/images/avatar/${appState?.user.avatar}`,
          }}
        />
      </View>

      <View className="p-2 gap-2">
        <ShareInput title="Full Name" value={appState?.user.name} />
        <ShareInput title="Email" value={appState?.user.email} />
        <ShareInput title="Phone" value={appState?.user.phone} />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
