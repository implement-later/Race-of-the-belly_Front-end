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

// user가 메뉴 주문시, 메뉴 받아오기
export const __getOrderingMenuThunk = createAsyncThunk(
  "GET_ORDERING_MENU",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/restaurant?restaurantId=${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// user가 메뉴 order시, 메뉴 post
export const __postOrderMenuThunk = createAsyncThunk(
  "POST_ORDER_MENU",
  async (payload, thunkAPI) => {
    try {
      await axios.post(`http://localhost:8080/order`, payload);
      console.log(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  orderdetail: { data: [], error: null, isLoading: false },
  orderingList: [],
};
export const orderdetailSlice = createSlice({
  name: "orderdetail",
  initialState,
  reducers: {
    addMenuCnt: (state, action) => {
      state.orderingList.map((obj) => {
        if (obj.id === action.payload) {
          return (obj.menuCnt += 1);
        } else {
          return { ...obj };
        }
      });
    },
    minusMenuCnt: (state, action) => {
      state.orderingList.map((obj) => {
        if (obj.id === action.payload) {
          return (obj.menuCnt -= 1);
        } else {
          return { ...obj };
        }
      });
    },
  },

  extraReducers: {
    [__getOrderDetailThunk.pending]: (state) => {
      state.orderdetail.isLoading = true;
    },
    [__getOrderDetailThunk.fulfilled]: (state, action) => {
      state.orderdetail.isLoading = false;
      state.orderdetail.data = action.payload;
    },
    [__getOrderDetailThunk.rejected]: (state, action) => {
      state.orderdetail.isLoading = false;
      state.orderdetail.error = action.payload;
    },

    // 주문할 메뉴 조회, menuCnt property가 없기 때문에 추가해서 orderingList에 넣어준다.
    [__getOrderingMenuThunk.pending]: (state) => {},
    [__getOrderingMenuThunk.fulfilled]: (state, action) => {
      const dupArr = action.payload.map((obj) => ({
        ...obj,
        menuCnt: 0,
      }));
      state.orderingList = dupArr;
    },
  },
});

export const { addMenuCnt, minusMenuCnt } = orderdetailSlice.actions;
export default orderdetailSlice.reducer;
