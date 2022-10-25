import axios from "axios";
import { ServerUrl } from "../../../sever";

const api = axios.create({
  baseURL: ServerUrl,
  headers: {
    "content-type": "application/json",
    accept: "*/*",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["Authrozation"] = `${accessToken}`;
  return config;
});

export const apis = {
  // menulistSlice
  getmenulist: (id) => api.get(`${ServerUrl}/restaurant/${id}`),
  addmenu: (payload) =>
    api.post(
      `${ServerUrl}/restaurant?restaurantId=${payload.restaurantId}`,
      payload
    ),
  delmenu: (payload) => api.delete(`${ServerUrl}/menu/${payload}`),
  update: (payload) =>
    api.patch(`${ServerUrl}/menu/${payload.menuId}`, payload),

  //menuSlice
  getmenu: (payload) => api.get(`${ServerUrl}/restaurant/${payload}`),

  //orderlistSlice
  getorderdetail: (payload) => api.get(`${ServerUrl}/order?orderId=${payload}`),
};
