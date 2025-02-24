import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { categoriesData } from "../constants";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function Categories() {
  return (
    <View style={styles.container}>
      {/* Title & "See All" Button */}
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Categories ScrollView */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {categoriesData.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Image source={cat.image} style={styles.image} />
            <Text style={styles.categoryText}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  title: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    color: "#374151", // Neutral-700
  },
  seeAll: {
    fontSize: wp(4),
    color: "#f97316",
  },
  scrollContainer: {
    padding:20,
    paddingHorizontal: 15,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 15,
  },
  image: {
    width: wp(18),
    height: wp(18),
    borderRadius: 15,
  },
  categoryText: {
    fontSize: wp(3.5),
    color: "#374151",
    marginTop: 5,
    fontWeight: "500",
  },
});
