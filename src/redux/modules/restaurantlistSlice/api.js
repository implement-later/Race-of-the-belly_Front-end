import axios from "axios";
import { ServerUrl } from "../../../sever";

export const getListApi = async () => {
  return await axios.get(`${ServerUrl}/restaurantlist`);
};
