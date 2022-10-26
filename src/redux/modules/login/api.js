import Cookies from "universal-cookie";
import { ServerUrl } from "../../../sever/index";
import axios from "axios";
axios.defaults.withCredentials = true;
//axios 전역 설정

// const cookies = new Cookies();
// export const getUsersApi = async () => {
//   const accessToken = cookies.get("Authorization");
//   return await axios.get(`${ServerUrl}/`, {
//     headers: {
//       Authorizition: accessToken,
//     },
//   });
// };

// 백업
// export const addUsersApi = async (payload) => {
//   console.log(payload);
//   return await axios.post("http://localhost:8080/user", payload);
// };

// export const addUsersApi = async (payload) => {
//   const accessToken = cookies.get("Authorization");
//   return await axios.post("http://localhost:8080/user", payload, {
//     headers: {
//       Authorizition: accessToken,
//     },
//   });
// };

// api instance create
const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    accept: "*/*",
  },
});

// 가지고 있는 토큰 넣어주기!
// 로그인 전이면 토큰이 없으니 못 넣어요.
// 그럴 땐 로그인 하고 토큰을 받아왔을 때 넣어줍시다.
api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  console.log(document.cookie.split("="));
  config.headers.common["Authorization"] = `${accessToken}`;
  return config;
});

export const apis = {
  login: (payload) => api.post("/member/login", payload),
  signup: (payload) => api.post("/member/signup", payload),
  restaurantlist: () => api.get("/restaurant"),
};
