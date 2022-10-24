import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";
import { current } from "@reduxjs/toolkit";
// import { serverUrl } from "../api";
export const __getMenuThunk = createAsyncThunk(
  "GET_MENU",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/restaurant/${payload}`
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  menu: {},
  error: null,
  isLoading: false,
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    clearMenu: (state) => {
      state.menu = {};
    },
  },
  extraReducers: {
    [__getMenuThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMenuThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.menu = action.payload;
    },
    [__getMenuThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearMenu } = menuSlice.actions;
export default menuSlice.reducer;
