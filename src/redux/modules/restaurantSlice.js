import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./API/api";

export const __getRestaurantList = createAsyncThunk(
  "getRestaurantList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.restaurantlist();
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  restaurantlist: [],
  isLoading: false,
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurantlist",
  initialState,
  reducers: {
    // getRestaurantList: (state, action) => {
    //   state.restaurantlist = action.payload;
    // },
  },
  extraReducers: {
    [__getRestaurantList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getRestaurantList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.restaurantlist = action.payload.data;
    },
    [__getRestaurantList.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { getRestaurantList } = restaurantSlice.actions;
export default restaurantSlice.reducer;
