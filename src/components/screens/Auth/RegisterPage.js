import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../../context/UserContext";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../../api/auth";
import AntDesign from "@expo/vector-icons/AntDesign";

const RegisterPage = () => {
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [image, setImage] = useState(null);

  const userInfo = {
    username: username,
    fullname: fullname,
    password: password,
  };
  const { mutate } = useMutation({
    mutationFn: () => register(userInfo, image),
    onSuccess: () => {
      console.log("Success!");
      setAuthenticated(true);

      // console.log("Heading home...");
      // navigation.replace("Home");
    },
    onError: (error) => {
      console.log("Whoops!");
      console.log("Error:", error);
    },
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRegister = () => {
    if (!username || !password || !fullname) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }
    Alert.alert("Success", `Account created for ${username}!`);
    mutate();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={fullname}
          onChangeText={setFullname}
          autoCapitalize="none"
        />
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

        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <AntDesign name="picture" size={18} color="#D06226" />
          <Text style={styles.uploadButtonText}>Upload Profile Image</Text>
        </TouchableOpacity>

        {image && <Image source={{ uri: image }} style={styles.profileImage} />}

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>
            Already have an account?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.signInLink}>Log in</Text>
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
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#7A403E",
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#D8CD9D",
    fontSize: 16,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  uploadButtonText: {
    color: "#D06226",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 10,
  },
  registerButton: {
    backgroundColor: "#9F2B00",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  registerButtonText: {
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
    color: "#7A403E",
  },
  signInLink: {
    fontWeight: "bold",
    color: "#D06226",
    textDecorationLine: "underline",
  },
});

export default RegisterPage;
