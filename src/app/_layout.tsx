import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/signup" />
      </Stack>
    </QueryClientProvider>
  );
}
