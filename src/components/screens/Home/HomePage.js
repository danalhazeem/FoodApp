import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryList from "./CategoryList";
import RestaurantList from "./RestaurantList";

const HomePage = () => {
  const sections = [
    { key: "categories", component: <CategoryList /> },
    { key: "restaurants", component: <RestaurantList /> },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.section}>{item.component}</ View>
  );

  return (
    <FlatList
      data={sections}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      style={styles.container}
    />
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F0E8",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
});
