import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Categories from "../components/categories";
import Destinations from "../components/destinations";
import SortCategories from "../components/sortCategories";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        
        {/* Avatar Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Let's Discover</Text>
          <TouchableOpacity>
            <Image 
              source={require("../../assets/images/avatar.png")} 
              style={styles.avatar} 
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Image 
            source={require("../../assets/images/magnifying-glass.png")} 
            style={styles.searchIcon} 
          />
          <TextInput 
            placeholder="Search Destination"
            placeholderTextColor="gray"
            style={styles.searchInput}
          />
        </View>

        {/*Categories */}
        <View style={{ marginBottom: 5 }}>
          <Categories />
        </View>

        {/*SortCategories */}
        <View style={{ marginBottom: 20 }}>
          <SortCategories />
        </View>

        {/*Destinations */}
        <View>
          <Destinations />
        </View>

        {/* AR Component
        <View>
          <TouchableOpacity
            style={styles.arButton}
            onPress={() => navigation.navigate("ARView", { object: "king" })} // ✅ Navigates to ARView
          >
            <Text style={styles.arButtonText}>Launch AR Experience</Text>
          </TouchableOpacity>
        </View> */}

        {/* 🔹 Logout Button */}
        <View>
          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={() => logoutUser(setAuth)}  // ✅ Call logout function
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding:20
  },
  headerText: {
    fontSize: wp(7),
    fontWeight: "bold",
    color: "#374151", // Neutral-700
  },
  avatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6), // Makes it circular
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6", // Neutral-100
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "gray",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
  }
});

