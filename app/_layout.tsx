import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import AppProvider from "../context/app.context";
import "../global.css";


export default function RootLayout() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  return (
    <>
      {/* <SafeAreaView className="flex-1"> */}
      <AppProvider>
        <ThemeProvider value={navTheme}>
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              contentStyle: {
                backgroundColor: "#fff",
              },
            }}
          >
            <Stack.Screen
              name="index"
              options={{ title: "Index Page", headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/welcome"
              options={{ title: "Welcome Page", headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/signup"
              options={{ title: "SignUp Page", headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/verify"
              options={{ title: "Verify Page", headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/login"
              options={{ title: "Login Page", headerShown: false }}
            />

            <Stack.Screen
              name="product/[id]"
              options={{ title: "Product Page", headerShown: false }}
            />

            <Stack.Screen
              name="product/index"
              options={{ title: "Product Page", headerShown: false }}
            />

            <Stack.Screen
              name="(tabs)"
              options={{ title: "Main Page", headerShown: false }}
            />
          </Stack>
        </ThemeProvider>
      </AppProvider>
      {/* </SafeAreaView> */}
    </>
  );
}
