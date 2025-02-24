import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setIsAuthenticated(!!token);
    };
    checkAuthStatus();
  }, []);

  if (isAuthenticated === null) {
    return null; // Prevents flashing wrong screens while loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} setAuth={setIsAuthenticated} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} setAuth={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return <AppNavigator />;
};
