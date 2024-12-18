import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const restaurants = [
  {
    id: 1,
    name: "Pasta Paradise",
    menuItems: [
      {
        id: 11,
        name: "Spaghetti Carbonara",
        price: 12.99,
        image:
          "https://stefaniaskitchenette.com/wp-content/uploads/2024/07/Carbonara-3-720x1080.webp",
      },
      {
        id: 12,
        name: "Margherita Pizza",
        price: 10.99,
        image:
          "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1662539926&width=800",
      },
      {
        id: 13,
        name: "Tiramisu",
        price: 6.99,
        image:
          "https://www.culinaryhill.com/wp-content/uploads/2021/01/Tiramisu-Culinary-Hill-1200x800-1.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Wok Express",
    menuItems: [
      {
        id: 14,
        name: "Kung Pao Chicken",
        price: 13.99,
        image:
          "https://www.onceuponachef.com/images/2018/05/Kung-Pao-Chicken-16-scaled.jpg",
      },
      {
        id: 15,
        name: "Spring Rolls",
        price: 5.99,
        image:
          "https://saltedmint.com/wp-content/uploads/2024/01/Vegetable-Spring-Rolls-4.jpg",
      },
      {
        id: 16,
        name: "Sweet and Sour Chicken",
        price: 14.99,
        image:
          "https://nomadette.com/wp-content/uploads/2023/06/Sweet-Sour-Chicken-Air-Fryer-Recipe.jpg",
      },
    ],
  },
  // Add other restaurants similarly
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 11,
      name: "Spaghetti Carbonara",
      price: 12.99,
      image:
        "https://stefaniaskitchenette.com/wp-content/uploads/2024/07/Carbonara-3-720x1080.webp",
      quantity: 1,
    },
    {
      id: 12,
      name: "Margherita Pizza",
      price: 10.99,
      image:
        "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1662539926&width=800",
        quantity: 1,
    },
    {
      id: 13,
      name: "Tiramisu",
      price: 6.99,
      image:
        "https://www.culinaryhill.com/wp-content/uploads/2021/01/Tiramisu-Culinary-Hill-1200x800-1.jpg",
        quantity: 1,
    },
  
  ]);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartImage} />
      <View style={styles.cartInfo}>
        <Text style={styles.cartName}>{item.name}</Text>
        <Text style={styles.cartPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleDecrement(item.id)}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleIncrement(item.id)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>KWD{calculateTotal()}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => Alert.alert("Checkout", "Proceed to payment?")}
      >
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#7A403E",
    marginBottom: 20,
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#F8E4C3",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cartImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 10,
  },
  cartInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  cartName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7A403E",
    marginBottom: 5,
  },
  cartPrice: {
    fontSize: 16,
    color: "#9F2B00",
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#D06226",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
  },
  quantityButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 16,
    color: "#333",
    marginHorizontal: 15,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#9F2B00",
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7A403E",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9F2B00",
  },
  checkoutButton: {
    backgroundColor: "#D06226",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
