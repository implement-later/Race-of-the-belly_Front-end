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

export const __addMenuThunk = createAsyncThunk(
  "GET_MENU_LIST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8080/retaurant?restaurantId=${payload.restaurantId}`,
        payload
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  menulist: {
    data: [],
    isLoading: false,
    error: null,
  },
  menulistByResId: {
    data: [],
    isLoading: false,
    error: null,
  },
};
export const menulistSlice = createSlice({
  name: "menulist",
  initialState,
  reducers: {},
  extraReducers: {
    // 메뉴 조회
    [__getMenuListThunk.pending]: (state) => {
      state.menulist.isLoading = true;
    },
    [__getMenuListThunk.fulfilled]: (state, action) => {
      state.menulist.isLoading = false;
      state.menulist.data.menulist = action.payload;
    },
    [__getMenuListThunk.rejected]: (state, action) => {
      state.menulist.isLoading = false;
      state.menulist.error = action.payload;
    },

    // 특정 메뉴추가
    [__addMenuThunk.pending]: (state) => {
      state.menulistByResId.isLoading = true;
    },
    [__addMenuThunk.fulfilled]: (state, action) => {
      state.menulistByResId.isLoading = false;
      state.menulistByResId.data.push(action.payload);
    },
    [__addMenuThunk.rejected]: (state, action) => {
      state.menulistByResId.isLoading = false;
      state.menulistByResId.error = action.payload;
    },
  },
});

export const {} = menulistSlice.actions;
export default menulistSlice.reducer;
