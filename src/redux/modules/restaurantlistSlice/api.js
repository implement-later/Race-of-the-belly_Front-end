import axios from "axios";

export const getListApi = async () => {
  return await axios.get("http://localhost:8080/restaurantlist");
};
