import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "../auth/Auth";

const LoginScreen = ({ navigation, setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const response = await loginUser(email, password);
    if (response.success) {
      await AsyncStorage.setItem("userToken", "fake-jwt-token"); // Save token
      setAuth(true); // Update authentication state
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } else {
      setError(response.message);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
};

export default LoginScreen;
