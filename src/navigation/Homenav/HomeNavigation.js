import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../../components/screens/Home/HomePage";
import RestaurantMenu from "../../components/screens/RestaurantMenu";
import dishDetail from "../../components/screens/dishDetail";
import Category from "../../components/screens/Category";
import CartScreen from "../../components/screens/CartScreen";
import { deleteToken } from "../../api/storage";
import UserContext from "../../context/UserContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

// const headerOptions = {
//   headerStyle: { backgroundColor: "#7A403E" },
//   headerTitleStyle: { color: "#F1F0E8", fontSize: 20, fontWeight: "bold" },
//   headerTintColor: "#F1F0E8",
// };

const HomeNavigation = () => {
  const [authenticated, setAuthenticated] = useContext(UserContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => {
          return (
            <TouchableOpacity
              onPress={async () => {
                await deleteToken();
                setAuthenticated(false);
              }}
            >
              <MaterialCommunityIcons name="logout" size={24} color="#D8CD9D" />
            </TouchableOpacity>
          );
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerOptions: false,
        }}
      />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantMenu}
        options={{
          headerOptions: false,
        }}
      />
      <Stack.Screen
        name="DishDetail"
        component={dishDetail}
        options={{
          headerOptions: false,
        }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          headerOptions: false,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerOptions: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
