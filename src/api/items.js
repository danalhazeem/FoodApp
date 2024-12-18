import instance from "./index";

// https://react-native-food-delivery-be.eapi.joincoded.com/api/category

const getCategories = async () => {
  try {
    const response = await instance.get("/category");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getResturants = async () => {
  try {
    const response = await instance.get("/resturant");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getCategories, getResturants };
