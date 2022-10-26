import axios from "axios";
import { JasonUrl } from "../../../sever/index";

const api = axios.create({
  baseURL: ServerUrl,
  headers: {
    "Content-Type": "application/json",
    accept: "*/*",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split(";")[0].split("=")[1];
  config.headers.Authorization = `${accessToken}`;
  return config;
});

export const apis = {
  // loginSlice
  login: (payload) => api.post(`/user`, payload),

  // signupSlice
  signup: (payload) => api.post(`/user`, payload),

  //restaurantSlice
  restaurantlist: (payload) => api.get("/restaurantlist/"),

  // menulistSlice
  getmenulist: (payload) => api.get(`/restaurant/${payload}`),

  addmenu: (payload) => api.post(`/menu`, payload),

  delmenu: (payload) => api.delete(`/menu/${payload}`),

  update: (payload) => api.patch(`/menu/${payload.menuId}`, payload),

  //menuSlice
  getmenu: (payload) => api.get(`/restaurant/${payload}`),

  //orderlistSlice
  getorderdetail: (payload) => api.get(`/order/${payload}`),
  getorderingmenu: (payload) => api.get(`/restaurant/${payload}`),
  postorder: (payload) => api.post(`/order`, payload),
};
