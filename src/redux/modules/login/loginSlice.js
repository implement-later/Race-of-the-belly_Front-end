import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsersApi, addUsersApi } from "../login/api";

export const __getUsers = createAsyncThunk(
  "getUsers",
  async (payload, thunkAPI) => {
    try {
      const { data } = await getUsersApi();
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
      const { data } = await addUsersApi(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState = {
  user: [],
  isLoading: false,
};

const loginiSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.user = action.payload;
    },
    addUsers: (state, action) => {
      state.user.push(action.payload);
    },
  },

  extraReducers: {
    [__addUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [__addUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user.push(action.payload);
    },
    [__addUsers.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { getUsers, addUsers } = loginiSlice.actions;
export default loginiSlice.reducer;
