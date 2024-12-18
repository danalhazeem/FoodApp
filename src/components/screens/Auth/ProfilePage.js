import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import UserContext from "../../../context/UserContext"; // Importing UserContext
import AntDesign from "@expo/vector-icons/AntDesign";

const ProfilePage = () => {
  const [userData, setUserData] = useContext(UserContext); // Using context to get user data

  const [username, setUsername] = useState(userData.username || ""); // Fallback if no data is available
  const [fullname, setFullname] = useState(userData.fullname || ""); // Fallback if no data is available
  const [image, setImage] = useState(userData.image || null); // Fallback if no data is available

  useEffect(() => {
    // Simulate fetching user data (e.g., from AsyncStorage or API)
    const fetchUserData = async () => {
      // Example static data for now
      setUsername("danalhazeem");
      setFullname("Danah alhazeem");
      setImage(userData.image);
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Profile</Text>

        {/* Display Full Name */}
      

        {/* Display Profile Image */}
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.profileImage} />
          ) : (
            <AntDesign name="user" size={50} color="#7A403E" />
          )}
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{fullname}</Text>
        </View>

        {/* Display Username */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{username}</Text>
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
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#7A403E",
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    color: "#9F2B00",
    fontWeight: "normal",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ProfilePage;
