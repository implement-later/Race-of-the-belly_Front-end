import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";
import { current } from "@reduxjs/toolkit";
// import { serverUrl } from "../api";

export const __getOrderDetailThunk = createAsyncThunk(
  "GET_ORDER_DETAIL",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/order?orderId=${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  orderdetail: [],
  error: null,
  isLoading: false,
};
export const orderdetailSlice = createSlice({
  name: "orderdetail",
  initialState,
  reducers: {},
  extraReducers: {
    [__getOrderDetailThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__getOrderDetailThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orderdetail = action.payload;
    },
    [__getOrderDetailThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = orderdetailSlice.actions;
export default orderdetailSlice.reducer;
