import { Button } from "@/components/button";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import "~/global.css";

export default function Index() {
  const router = useRouter()
  const onClick = () => {
    console.log('first')
    router.push("/(auth)/login")
  }
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Text>Welcome to our react native project!</Text>
      <Button title="Get Started" onPress={onClick} />
    </View>
  );
}
