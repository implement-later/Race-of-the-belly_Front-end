import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setCookie } from "../../shared/Cookie";
import { apis } from "../modules/API/api";

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

// export const __getUsers = createAsyncThunk(
//   "getUsers",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await getUsersApi();
//       return thunkAPI.fulfillWithValue(data);
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

export const __postSignup = createAsyncThunk(
  "postSignUp",
  async (payload, thunkAPI) => {
    try {
      const res = await apis.signup(payload);

      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postLogin = createAsyncThunk(
  "postLogin",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const res = await apis.login(payload);
      console.log(res);
      console.log(res.headers.authorization);
      // token이란 이름으로 쿠키 저장, 마지막은 파라미터는 만료시간 설정해주는 것.
      setCookie("Authorization", res.headers.authorization, 7);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __addUsers = createAsyncThunk(
//   "addUsers",
//   async (payload, thunkAPI) => {
//     try {
//       const response = await axios.post(`${ServerUrl}/user`, payload);
//       // console.log(payload);
//       // console.log(response);
//       // setCookie("password", `BEARER ${response.data.password}`);
//       // setCookie("uesername", `${response.data.id}`);

//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const initialState = {
  user: [],
  isLogin: false,
  isLoading: false,
  error: null,
};

const loginiSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    postSignUp: (state, action) => {
      state.user.push(action.payload);
    },
    postLogin: (state, action) => {
      state.user.push(action.payload);
    },
  },

  extraReducers: {
    [__postSignup.pending]: (state) => {
      state.isLoading = true;
    },
    [__postSignup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__postSignup.rejected]: (state) => {
      state.isLoading = false;
    },

    [__postLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__postLogin.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { postLogin, postSignUp } = loginiSlice.actions;
export default loginiSlice.reducer;
