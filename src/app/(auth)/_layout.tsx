import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide the default header
      }}
    >
      <Stack.Screen name="/login" />
      <Stack.Screen name="/signup" />
    </Stack>
  );
}
