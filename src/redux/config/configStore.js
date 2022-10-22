import { configureStore } from "@reduxjs/toolkit";
import restaurant from "../modules/restaurantSlice";
import user from "../modules/login/loginSlice";
import orderdetail from "../modules/orderlistSlice";
import menulist from "../modules/menulistSlice";

const store = configureStore({
  reducer: { restaurant, user,menulist, orderdetail },




export default store;
