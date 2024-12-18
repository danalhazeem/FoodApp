import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import restaurantCategories from "../../data/restaurantCategories";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../api/items";

const CategoryList = () => {
  const navigation = useNavigation();
  // const category = ({ item }) => (
  //   <TouchableOpacity style={styles.card}>
  //     <Image source={{ uri: item.image }} style={styles.picture} />
  //     <Text style={styles.categoryName}>{item.name}</Text>
  //   </TouchableOpacity>
  // );
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Category", { category: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
  const { data: restaurantCategories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantCategories}
        renderItem={renderCategory}
        keyExtractor={(item) => item._id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#F8F1E1", // Light beige background for cards
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 30,
    padding: 10,
    width: 130,
    height: 120,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#7A403E", // Using the primary color for text
    textAlign: "center",
  },
});
