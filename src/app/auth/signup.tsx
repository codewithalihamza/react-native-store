import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export function SignupScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Sign Up</Text>
            <TextInput
                style={{ width: "80%", padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 }}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={{ width: "80%", padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 20 }}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity
                onPress={() => console.log("Signup Pressed")}
                style={{ backgroundColor: "#28a745", padding: 12, borderRadius: 8, marginBottom: 10 }}
            >
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                <Text style={{ color: "#007bff" }}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    );
}
