import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import restaurants from "../../data/restaurants"; // Assuming your restaurants data is imported

const Category = ({ route, navigation }) => {
  // Get the category data from the route params
  const { category } = route.params;

  // Filter restaurants based on the selected category
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.category === category.categoryName
  );

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Restaurant", { restaurant: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>
          ⭐ {item.rating} | 🕒 {item.deliveryTime}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={category.restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#F8F1E1", // Light beige for cards
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7A403E", // Primary color for text
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: "#9F2B00", // Accent color for details text
  },
});

export default Category;
