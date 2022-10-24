// import React from "react";
// import axios from "axios";

// function Example() {
//   console.log("hi");
//   const test = async () => {
//     try {
//       let { data } = await axios.post(
//         "http://13.209.43.135:8080/order",
//         {
//           memberUsername: "storeJelly",
//           restaurantUsername: "jelly",
//           orderDetailsList: [
//             {
//               menuName: "붕어빵",
//               count: 1,
//             },
//             {
//               menuName: "호떡",
//               count: 3,
//             },
//           ],
//         },

//         {
//           withCredentials: true,
//           headers: {
//             Authrozation:
//               "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdG9yZUplbGx5IiwiYXV0aCI6IlJPTEVfQ1VTVE9NRVIiLCJleHAiOjE2NjY2MjIzMTJ9.-1ljKx2GGBspgaFqa8e541y0FnX_SpdTfHtkjxftp4vnTFcOHAOgghUT-AW1jX-Cv0lffH010CIiLxDxtmbgLg",
//           },
//         }
//       );
//       return console.log(data.data);
//     } catch (e) {
//       return console.log(e.code);
//     }
//   };

//   test();
//   return <form></form>;
// }

// export default Example;

// // eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NjcyMjUzMTJ9.8JmXlmoK4nkLD49MierHkg1e-5Q8oIWY8l3t4M-SLq3V5od9cFtpOrEeA1O6aq5g9Gv1bFuKi_YnWdZKWHCs8A

// // let { data } = await axios.post("http://13.209.43.135:8080/order", {
// //   memberUsername: "sjwsafjsdsk2",
// //   restaurantUsername: "jelly",
// //   orderDetailsList: [
// //     {
// //       menuName: "붕어빵",
// //       count: 1,
// //     },
// //     {
// //       menuName: "호떡",
// //       count: 3,
// //     },
// //   ],
// //   headers: {
// //     Authrozation:
// //       "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NjcyMjM4NzN9.WfnN4DuAaZdE2eKLMPK44AY__z1LNJXYN3NeoGBII8UShhy8XgmMHZuWuVq3tTg9Bv68-ZJRFEDB3y-eOqx9Gw",
// //   },
// // });
