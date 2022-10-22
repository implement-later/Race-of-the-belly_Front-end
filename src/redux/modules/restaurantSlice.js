import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";
import { current } from "@reduxjs/toolkit";
// import { serverUrl } from "../api";

// export const __addComment = createAsyncThunk(
//   "ADD_COMMENT",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await axios.post(`${serverUrl}/comments`, payload);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.code);
//     }
//   }
// );

const initialState = {
  restaurant: {},
};
export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = restaurantSlice.actions;
export default restaurantSlice.reducer;
