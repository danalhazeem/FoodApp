import instance from ".";
import { setToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  setToken(data.token);
  return data;
};

const register = async (userInfo, image) => {
  // transform userInfo to formdata

  const formData = new FormData();
  /**
   * {"email": "aya2@aya2.com", "name": "aya2", "password": "123"}
   */

  console.log(image);
  for (key in userInfo) {
    formData.append(key, userInfo[key]);
  }

  formData.append("image", {
    name: "image.jpg",
    type: "image/jpeg",
    uri: image.uri,
  });
  console.log(formData);
  // extract image properties (name, type, uri) and add them to FD
  const { data } = await instance.post("/auth/register", formData);
  setToken(data.token);
  return data;
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

export { login, register, me, getAllUsers };
