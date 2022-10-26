import axios from "axios";
import { JasonUrl, ServerUrl } from "../../../sever";

const api = axios.create({
  baseURL: JasonUrl,
  //   headers: {
  //     "content-type": "application/json",
  //     accept: "*/*",
  //   },
});

// api.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["Authrozation"] = `${accessToken}`;
//   return config;
// });

export const apis = {
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
