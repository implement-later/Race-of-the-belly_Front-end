import { configureStore } from "@reduxjs/toolkit";
import restaurant from "../modules/restaurantSlice";

const store = configureStore({
  reducer: { restaurant },
});

export default store;
