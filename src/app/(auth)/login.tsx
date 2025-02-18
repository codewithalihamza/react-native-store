import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onClickSignUp = () => {
    router.push("/signup");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Login
      </Text>
      <TextInput
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 10,
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
        }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={() => console.log("Login Pressed")}
        style={{
          backgroundColor: "#007bff",
          padding: 12,
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClickSignUp}>
        <Text style={{ color: "#007bff" }}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
