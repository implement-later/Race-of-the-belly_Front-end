import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./API/api";

export const __getCustomerList = createAsyncThunk(
  "getCustomerList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.customerlist();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  customerlist: [],
  isLoading: false,
  error: null,
};

const customerlistSlice = createSlice({
  name: "customerlist",
  initialState,
  reducers: {
    getCustomerList: (state, action) => {
      state.customerlist = action.payload;
    },
  },
  extraReducers: {
    [__getCustomerList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCustomerList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.restaurantlist = action.payload;
    },
    [__getCustomerList.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { getCustomerList } = customerlistSlice.actions;
export default customerlistSlice.reducer;
