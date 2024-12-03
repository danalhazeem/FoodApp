import React from "react";
import { SafeAreaView, StyleSheet, View, StatusBar, Text } from "react-native";
import CategoryList from "./src/components/screens/CategoryList";
import RestaurantList from "./src/components/screens/RestaurantList";
import LoginPage from "./src/components/screens/LoginPage";
import RegisterPage from "./src/components/screens/RegisterPage";

const App = () => {
  return (
    <View style={styles.container}>
      {/* StatusBar configuration */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="orange"
        translucent
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>BI DARB</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <CategoryList />

        <RestaurantList />

        {/* <LoginPage /> */}
        {/* <RegisterPage /> */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FC2E20",
    paddingTop: (StatusBar.currentHeight || 24) + 20,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
