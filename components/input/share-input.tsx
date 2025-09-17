import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

interface IProps {
  title?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  value?: any;
  setValue?: (v: any) => void;
  onChangeText?: any;
  onBlur?: any;
  error?: string;
}

const ShareInput = (props: IProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const {
    title,
    keyboardType,
    secureTextEntry,
    value,
    // setValue,
    onChangeText,
    onBlur,
    error,
  } = props;

  return (
    <View className="gap-2">
      {title && (
        <Text className="text-xl font-semibold text-gray-700/50">{title}</Text>
      )}
      <View className="relative">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setFocus(true)}
          onBlur={(e) => {
            setFocus(false);
            if (onBlur) onBlur(e);
          }}
          className={`border rounded-lg px-5 pr-11 py-4`}
          style={{
            borderColor: focus ? "orange" : "gray",
          }}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !isShowPassword}
        />
        {error && <Text className="text-red-500">{error}</Text>}

        {secureTextEntry &&
          (isShowPassword ? (
            <Ionicons
              onPress={() => setIsShowPassword(!isShowPassword)}
              name="eye-outline"
              size={24}
              color="black"
              className="absolute right-3 top-[13]"
            />
          ) : (
            <Ionicons
              onPress={() => setIsShowPassword(!isShowPassword)}
              name="eye-off-outline"
              size={24}
              color="black"
              className="absolute right-3 top-[13]"
            />
          ))}
      </View>
    </View>
  );
};

export default ShareInput;
