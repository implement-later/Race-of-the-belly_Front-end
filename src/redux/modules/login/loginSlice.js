import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsersApi } from "../login/api";
import { getCookie, setCookie } from "./cookies";
import axios from "axios";
import { ServerUrl } from "../../../sever";

// export const __getUsers = createAsyncThunk(
//   "getUsers",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await getUsersApi();
//       return thunkAPI.fulfillWithValue(data);
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

export const __getUsers = createAsyncThunk(
  "getUsers",
  async (payload, thunkAPI) => {
    try {
      const data = await getUsersApi();
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __addUsers = createAsyncThunk(
  "addUsers",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${ServerUrl}/user`, payload);
      console.log(payload);
      setCookie("password", `BEARER ${response.data.password}`);
      setCookie("uesername", `${response.data.id}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  id: "",
  isLogin: false,
  isLoading: false,
  error: "",
};

const loginiSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.user = action.payload;
    },
    // addUsers: (state, action) => {
    //   state.user.push(action.payload);
    //
    // },
  },

  extraReducers: {
    [__addUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [__addUsers.fulfilled]: (state) => {
      state.isLoading = false;
      state.id = getCookie("uesername");
      state.isLogin = getCookie("password") ? true : false;
    },
    [__addUsers.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getUsers, addUsers } = loginiSlice.actions;
export default loginiSlice.reducer;
