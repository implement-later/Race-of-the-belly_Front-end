import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListApi } from "../restaurantlistSlice/api";

export const __getList = createAsyncThunk(
  "getList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await getListApi();
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
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
    getList: (state, action) => {
      state.restaurantlist = action.payload;
    },
  },
  extraReducers: {
    [__getList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.restaurantlist = action.payload;
    },
    [__getList.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { getList } = restaurantSlice.actions;
export default restaurantSlice.reducer;
