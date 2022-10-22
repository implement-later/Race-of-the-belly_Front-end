import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";
import { current } from "@reduxjs/toolkit";
// import { serverUrl } from "../api";

export const __getMenuListThunk = createAsyncThunk(
  "GET_MENU_LIST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/retaurant?restaurantId=${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  menulist: [],
  error: null,
  isLoading: false,
};
export const menulistSlice = createSlice({
  name: "menulist",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMenuListThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMenuListThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.menulist = action.payload;
    },
    [__getMenuListThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = menulistSlice.actions;
export default menulistSlice.reducer;
