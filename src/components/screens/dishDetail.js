import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


// const dishDetail = {
//   id: 3,
//   name: "Tiramisu",
//   price: 6.99,
//   image:
//     "https://www.culinaryhill.com/wp-content/uploads/2021/01/Tiramisu-Culinary-Hill-1200x800-1.jpg",
//   description:
//     "Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone.",
// };

const DishDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { dish } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    Alert.alert( "Added to Cart",);
  };

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const totalPrice = dish.price * quantity;

  return (
    <View style={styles.container}>
      <Image source={{ uri: dish.image }} style={styles.backgroundImage} />

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.description}>{dish.description}</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={decreaseQuantity}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={increaseQuantity}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.price}>Price: ${totalPrice.toFixed(2)}</Text>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DishDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    width: "100%",
    height: 300,
    position: "absolute", // Image stays in the background
    top: 0,
    left: 0,
  },
  card: {
    position: "absolute",
    top: 270, // Move the card down so it sits in front of the image
    left: 20,
    right: 20,
    bottom: 40,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background for better visibility
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "column",
  },
  cardContent: {
    flex: 1, // Ensures the content fills the available space
    justifyContent: "flex-start", // Align content to the top of the card
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7A403E", // Updated color
    marginBottom: 5, // Small margin below the name
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#9F2B00", // Updated color
    marginBottom: 15, // Spacing between description and price
    textAlign: "center",
  },
  price: {
    fontSize: 20, // Increased font size for better visibility
    fontWeight: "bold",
    color: "#D06226", // Updated color
    textAlign: "center",
    marginBottom: 20, // Spacing between price and the quantity controls
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, // Spacing between quantity controls and the button
  },
  quantityButton: {
    backgroundColor: "#D8CD9D", // Updated color
    width: 50, // Increased width for larger buttons
    height: 50, // Increased height for larger buttons
    borderRadius: 25, // Circular buttons
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15, // Adjusted margin for spacing
  },
  quantityButtonText: {
    fontSize: 30, // Increased font size for better visibility
    color: "#fff",
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 22, // Increased font size for better visibility
    fontWeight: "bold",
    color: "#333",
  },
  addToCartButton: {
    backgroundColor: "#7A403E", // Updated color
    paddingVertical: 15, // Increased padding for better button size
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center", // Centering the text inside the button
    marginTop: "auto", // Push the button to the bottom of the card
  },
  addToCartText: {
    fontSize: 18, // Slightly increased font size
    color: "#fff",
    fontWeight: "bold",
  },
});


