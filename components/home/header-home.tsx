import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  style?: any;
}
const HeaderHome = ({ style }: IProps) => {
  return (
    <View style={style}>
      <Text>HeaderHome</Text>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({});
