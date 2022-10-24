import axios from "axios";

export const getUsersApi = async () => {
  return await axios.get("http://localhost:8080/user");
};

export const addUsersApi = async (payload) => {
  return await axios.post("http://localhost:8080/user", payload);
};

// http://13.209.43.135:8080/

//eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NjcxMzg2NjZ9.aZB5nay86W-dF_xR-2TXR4fiei2zA69CFpnx12yuQYS5FZDyYYhSJKjU4Ic3Yxxznyx5OBMzK8oOnV8rthre9g

// const api = axios.create({
//   baseURL: "http://localhost:8080/user",
//   headers: {
//     "content-type": "application/json;charset=UTF-8",
//     accept: "application/json,",
//   },
// });

// api.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

// export const apis = {
//   login: (id, pw) => api.post("/user/login", { username: id, password: pw }),
//   signup: (id, pw, pwcheck) =>
//     api.post("/user/signup", {
//       username: id,

//       password: pw,
//       repassword: pwcheck,
//     }),
//   userInfo: () => api.get(`/myinfo`),
//   userPassword: (pw) => api.post(`/myinfo`, pw),
//   userNewPassword: (pw) => api.put(`/myinfo`, pw),
// };
