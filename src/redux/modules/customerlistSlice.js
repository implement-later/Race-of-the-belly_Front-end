import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./API/api";

export const __getCustomerlist = createAsyncThunk(
  "getCustomerList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.customerlist(payload);
      console.log(payload);
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
  reducers: {},
  extraReducers: {
    [__getCustomerlist.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCustomerlist.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.customerlist = action.payload;
    },
    [__getCustomerlist.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = customerlistSlice.actions;
export default customerlistSlice.reducer;
