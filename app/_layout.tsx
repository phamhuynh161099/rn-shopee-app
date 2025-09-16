import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{ title: "Index Page", headerShown: false }}
          />
          <Stack.Screen
            name="(auth)/signup"
            options={{ title: "SignUp Page", headerShown: false }}
          />
          <Stack.Screen
            name="(auth)/verify"
            options={{ title: "Verify Page", headerShown: false }}
          />
        </Stack>
      </SafeAreaView>
    </>
  );
}
