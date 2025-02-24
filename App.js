import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./src/navigation"; // ✅ Import the correct navigator

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator /> {/* ✅ Now it uses the correct navigator */}
    </GestureHandlerRootView>
  );
}
