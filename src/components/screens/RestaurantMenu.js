import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = ({ route }) => {
  const navigation = useNavigation();
  const { restaurant } = route.params;

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuCard}
      onPress={() => navigation.navigate("DishDetail", { dish: item })}
    >
      <Image source={{ uri: item.image }} style={styles.menuImage} />
      <View style={styles.menuInfo}>
        <Text style={styles.menuName}>{item.name}</Text>
        <Text style={styles.menuDescription}>{item.description}</Text>
        <Text style={styles.menuPrice}>{item.price} KWD</Text>
        {/* <TouchableOpacity
          style={styles.orderButton}
          // onPress={() => handleOrderNow(item)}
        >
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Restaurant Card */}
      <View style={styles.restaurantCard}>
        <Image
          source={{ uri: restaurant.image }}
          style={styles.restaurantImage}
        />
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDetails}>
            ⭐ {restaurant.rating} | 🕒 {restaurant.deliveryTime}
          </Text>
        </View>
      </View>
      {/* Menu List */}
      <FlatList
        data={restaurant.items}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item._id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  restaurantCard: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#D8CD9D",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  restaurantInfo: {
    flex: 1,
    justifyContent: "center",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7A403E",
  },
  restaurantDetails: {
    fontSize: 14,
    color: "#9F2B00",
    marginTop: 5,
  },
  menuCard: {
    flexDirection: "row",
    backgroundColor: "#F8F1E1",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  menuImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  menuInfo: {
    flex: 1,
    justifyContent: "center",
  },
  menuName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7A403E",
  },
  menuDescription: {
    fontSize: 14,
    color: "#9F2B00",
    marginVertical: 5,
  },
  menuPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D06226",
  },
  orderButton: {
    marginTop: 10,
    backgroundColor: "#7A403E",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default MenuScreen;
