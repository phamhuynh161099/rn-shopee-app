import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  name: string;
}
const CollectionHome = (props: IProps) => {
  const { name } = props;
  return (
    <View className="h-[260] mb-2 border p-2">
      <Text>{name}</Text>
    </View>
  );
};

export default CollectionHome;

const styles = StyleSheet.create({});
