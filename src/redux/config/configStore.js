import { configureStore } from "@reduxjs/toolkit";
import restaurant from "../modules/restaurantSlice";
import user from "../modules/login/loginSlice";

const store = configureStore({
  reducer: { restaurant, user },
});

export default store;
