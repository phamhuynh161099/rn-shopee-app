import { Stack } from "expo-router";
import '../global.css';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Index Page" }} />
    </Stack>
  );
}
