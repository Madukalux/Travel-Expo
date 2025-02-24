import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import { signUpUser } from "../auth/Auth";


const signupValidationSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function SignupScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={async (values) => {
          const response = await signUpUser(values.email, values.password);
          if (response.success) {
             Alert.alert("Account Created", "You have successfully signed up!");
             navigation.navigate("Login");
          } else {
             Alert.alert("Error", response.message);
          }
        }}

      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.switchText}>Already have an account? Log in</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 10 },
  button: { backgroundColor: "#f97316", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  errorText: { color: "red", fontSize: 14 },
  switchText: { textAlign: "center", marginTop: 10, color: "#f97316" },
});
