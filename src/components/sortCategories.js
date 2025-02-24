import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { sortCategoryData } from "../constants";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState("Popular");

  return (
    <View style={styles.container}>
      {sortCategoryData.map((sort, index) => {
        let isActive = sort == activeSort;
        return (
          <TouchableOpacity 
            key={index} 
            onPress={() => setActiveSort(sort)} 
            style={[styles.button, isActive && styles.activeButton]}
          >
            <Text style={[styles.text, isActive && styles.activeText]}>{sort}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F3F4F6", // Neutral-100
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 1,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  text: {
    fontSize: wp(4),
    color: "#6B7280", // Gray-500
    fontWeight: "bold",
  },
  activeText: {
    color: "#f97316",
  },
});
