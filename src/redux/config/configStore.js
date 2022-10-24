import { configureStore } from "@reduxjs/toolkit";
import restaurant from "../modules/restaurantSlice";
import menulist from "../modules/menulistSlice";
import menu from "../modules/menuSlice";
import orderdetail from "../modules/orderlistSlice";

const store = configureStore({
  reducer: { restaurant, menulist, orderdetail, menu },
});

export default store;
