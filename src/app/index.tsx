import { RootState } from "@/redux/store";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();
  const onClick = () => {
    router.push("/login");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Store, {user?.email || "Guest"}!</Text>
      {!user?.email && <Button title="Get Started" onPress={onClick} />}{" "}
    </View>
  );
}
