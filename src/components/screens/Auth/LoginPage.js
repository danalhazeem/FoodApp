import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../api/auth";
import UserContext from "../../../context/UserContext";

const LoginPage = () => {
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = {
    username: username,
    password: password,
  };

  const { mutate } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setAuthenticated(true);
      // navigation.replace("Home");
    },
    onError: (error) => {
      console.log("Whoops login !");
      console.log("Error:", error);
    },
  });

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }

    Alert.alert("Success", `Welcome, ${username}!`);
    mutate();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>
            Don't have an account{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.signInLink}>Register</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff", // Changed to white for better contrast
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 20,
    width: 300,
    height: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#7A403E", // Using primary color
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#D8CD9D", // Light beige border color
    fontSize: 16,
    color: "#333", // Dark text for readability
  },
  loginButton: {
    backgroundColor: "#9F2B00", // Using the deep red color for button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  signInText: {
    fontSize: 16,
    color: "#7A403E", // Default color for the non-clickable text
  },
  signInLink: {
    fontWeight: "bold",
    color: "#D06226", // Highlight color for "Sign in"
    textDecorationLine: "underline", // Optional: to make it more clickable
  },
});

export default LoginPage;
