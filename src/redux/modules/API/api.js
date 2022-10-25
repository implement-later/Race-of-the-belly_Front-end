import axios from "axios";
import { JasonUrl, ServerUrl } from "../../../sever";

const api = axios.create({
  baseURL: JasonUrl,
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

  addmenu: (payload) => api.post(`http:/localhost:8080/menu`, payload),

  delmenu: (payload) => api.delete(`${ServerUrl}/menu/${payload}`),
  update: (payload) =>
    api.patch(`${ServerUrl}/menu/${payload.menuId}`, payload),

  //menuSlice
  getmenu: (payload) => api.get(`${ServerUrl}/restaurant/${payload}`),

  //orderlistSlice
  getorderdetail: (payload) => api.get(`${ServerUrl}/order?orderId=${payload}`),
  getorderingmenu: (payload) => api.get(`${ServerUrl}/restaurant/${payload}`),
  postorder: (payload) => api.post(`${ServerUrl}/order`, payload),
};
