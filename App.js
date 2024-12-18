import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartScreen } from "./src/components/screens/CartScreen";
import HomeNavigation from "./src/navigation/Homenav/HomeNavigation";
import LoginPage from "./src/components/screens/Auth/LoginPage";
import RegisterPage from "./src/components/screens/Auth/RegisterPage";
import AuthNavigation from "./src/navigation/AuthNav/AuthNavigation";
import MainNavigation from "./src/navigation/TabNav/MainNavigation";
import UserContext from "./src/context/UserContext";

const App = () => {
  const queryClient = new QueryClient();
  const [authenticated, setAuthenticated] = useState(false); //keep track of the user status
  const checkToken = async () => {
    console.log("Checking token...");
    // check if the token exists
    const token = await getToken();
    // exists ? setAuth to true : null
    if (token) setAuthenticated(true);
  };

  // useEffect
  useEffect(() => {
    checkToken();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#7A403E" // Set to your custom color
            translucent
          />

          <View style={styles.header}>
            <Image
              source={require("./assets/appIcon.png")}
              style={styles.headerImage}
            />
            <Text style={styles.headerText}>BIL DARB</Text>
          </View>
          {/* <CartScreen /> */}
          {/* <HomeNavigation /> */}
          {/* <LoginPage /> */}
          {/* <RegisterPage /> */}
          {/* <MainNavigation /> */}
          <UserContext.Provider value={[authenticated, setAuthenticated]}>
            {authenticated ? <MainNavigation /> : <AuthNavigation />}
          </UserContext.Provider>
        </View>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#white",
  },
  headerImage: {
    width: 90,
    height: 50,
    // marginRight: 10,
    paddingRight: 10,
  },
  header: {
    backgroundColor: "#7A403E", // Updated color to your chosen palette
    paddingTop: (StatusBar.currentHeight || 24) + 20,
    paddingHorizontal: 16,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#D8CD9D", // Updated color to your chosen palette
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
});

export default App;
