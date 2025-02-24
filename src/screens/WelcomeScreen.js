import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome1.jpg")}
        style={styles.backgroundImage}
      />

      <View style={styles.contentContainer}>
        <LinearGradient
          colors={["transparent", "rgba(140, 146, 148, 0.8)"]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Traveling made easy</Text>
          <Text style={styles.subText}>
            Experience the world's best adventures with us
          </Text>
        </View>

        {/* Login & Sign Up Buttons */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={[styles.button, styles.signUpButton]}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end" },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  contentContainer: { padding: 20, paddingBottom: 40 },
  gradient: { position: "absolute", bottom: 0, width: "120%", height: "30%" },
  textContainer: { marginBottom: 20 },
  titleText: { color: "white", fontSize: 30, fontWeight: "bold" },
  subText: { color: "#d1d5db", fontSize: 16, fontWeight: "500" },
  button: {
    backgroundColor: "#f97316",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
  },
  signUpButton: { backgroundColor: "#2563eb" },
  buttonText: { color: "white", fontSize: 20, fontWeight: "bold" },
});
