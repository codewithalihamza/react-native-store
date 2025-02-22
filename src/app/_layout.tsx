import { store } from "@/redux/store";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="/" />
        </Stack>
      </Provider>
    </QueryClientProvider>
  );
}
