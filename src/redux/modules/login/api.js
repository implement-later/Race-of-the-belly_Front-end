import axios from "axios";
import Cookies from "universal-cookie";

export const BASE_URL = "http://localhost:8080";

const cookies = new Cookies();
export const getUsersApi = async () => {
  const accessToken = cookies.get("Authorization");
  return await axios.get("http://localhost:8080/user", {
    headers: {
      Authorizition: accessToken,
    },
  });
};

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
