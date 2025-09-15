import React, { ReactNode } from "react";
import { Text, View } from "react-native";

interface IProps {
  title: string;
  blockStyle: string;
  textStyle: string;
  onPress: () => void;
  icon?: ReactNode;
}

const ShareButton = ({ blockStyle, textStyle, icon, title }: IProps) => {
  return (
    <View
      className={`${blockStyle} py-4 px-5 rounded-full elevation-md flex flex-row items-center`}
    >
      {icon}
      <Text className={`${textStyle} text-2xl font-semibold`}>{title}</Text>
    </View>
  );
};

export default ShareButton;
