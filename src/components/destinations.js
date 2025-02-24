import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { destinationData } from "../constants";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function Destinations() {
  return (
    <View style={styles.container}>
      {destinationData.map((item, index) => (
        <DestinationCard key={index} item={item} />
      ))}
    </View>
  );
}

const DestinationCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.shortDescription}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: wp(2), // Ensures spacing works correctly
  },
  card: {
    width: "48%", // Makes sure two items fit per row with space
    aspectRatio: 3 / 4, // Ensures consistent height
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: wp(5), // Adds spacing between rows
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  overlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: wp(4),
    fontWeight: "bold",
  },
});
