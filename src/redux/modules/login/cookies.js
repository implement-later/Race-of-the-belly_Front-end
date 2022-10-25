// import { Cookies } from "react-cookie";

// const cookies = new Cookies();

// export const getCookie = (name) => cookies.get(name);
// export const setCookie = (name, value) =>
//   cookies.set(name, value, {
//     path: "/",
//     expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
//   });

// export const removeCookie = (name) =>
//   cookies.remove(name, { expires: new Date(Date.now()) });

// import Cookies from "universal-cookie";
// // import { __getUsers, __addUsers } from "./loginSlice";

// const cookies = new Cookies();

// export function setTokenToCookie(data) {
//   let now = new Date();
//   let after1m = new Date();
//   after1m.setMinutes(now.getMinutes() + 30);
//   cookies.set("Authorization", data, { path: "/", expires: after1m });
// }

// export function logout() {
//   cookies.remove("Authorization", { path: "/" });
// }

// export function cookieCkeck() {
//   const accessCookie = cookies.get("Authorization");
//   if (accessCookie === undefined) {
//     return false;
//   } else {
//     return true;
//   }
// }
