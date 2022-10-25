import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/login/loginSlice";
import orderdetail from "../modules/orderlistSlice";
import menulist from "../modules/menulistSlice";
import restaurantlist from "../modules/restaurantlistSlice/restaurantSlice";
import menu from "../modules/menuSlice";

const store = configureStore({
  reducer: { user, menulist, orderdetail, menu, restaurantlist },
});
export default store;
