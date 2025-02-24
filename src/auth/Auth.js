import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = async (email, password) => {
  const storedEmail = await AsyncStorage.getItem("userEmail");

  if (email === "a@gmail.com" && password === "password") {
    await AsyncStorage.setItem("userToken", "fake-jwt-token");
    return { success: true };
  } else {
    return { success: false, message: "Invalid email or password" };
  }
};


export const logoutUser = async (setAuth) => {
  try {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userEmail"); // Clear stored email
    setAuth(false); // ✅ Ensure the UI updates after logout
  } catch (error) {
    console.error("Logout failed:", error);
  }
};


export const signUpUser = async (email, password) => {
  try {
    // Store user credentials in AsyncStorage
    await AsyncStorage.setItem("userEmail", email);
    await AsyncStorage.setItem("userToken", "fake-jwt-token");
    
    return { success: true };
  } catch (error) {
    return { success: false, message: "Signup failed" };
  }
};
