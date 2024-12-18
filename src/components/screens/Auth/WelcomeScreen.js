import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../../assets/food-app-logo.png')} // Add your image file path here
        style={styles.logo}
      /> */}
      <Text style={styles.title}>Welcome to FoodApp!</Text>
      <Text style={styles.subtitle}>
        Discover delicious meals, order from your favorite restaurants, and get
        them delivered right to your door!
      </Text>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Let’s Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white", // Soft beige background '#D8CD9D'
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7A403E', // Primary color
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#9F2B00', // Accent color
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#9F2B00', // Deep orange
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF', // White text
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
