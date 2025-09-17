import React, { ReactNode } from "react";
import { Pressable, Text } from "react-native";

interface IProps {
  title: string;
  blockStyle: string;
  textStyle: string;
  onPress: () => void;
  icon?: ReactNode;
  loading?: boolean;
}

const ShareButton = ({
  blockStyle,
  textStyle,
  icon,
  title,
  onPress,
  loading = false,
}: IProps) => {
  return (
    <Pressable
      disabled={loading}
      className={`${blockStyle} py-4 px-5 rounded-full elevation-md flex flex-row items-center gap-2`}
      onPress={onPress}
    >
      {icon}
      <Text className={`${textStyle} text-2xl font-semibold`}>{title}</Text>
    </Pressable>
  );
};

export default ShareButton;
