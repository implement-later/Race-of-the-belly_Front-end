import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "../pages/Example";
import Login from "../pages/Login";
import Main from "../pages/Main";
import OrderDetail from "../pages/OrderDetail";
import OwnerAddMenu from "../pages/OwnerAddMenu";
import OwnerMenu from "../pages/OwnerMenu";
import OwnerOrders from "../pages/OwnerOrders";
import SignUp from "../pages/SignUp";
import UserOrder from "../pages/UserOrder";
import UserOrderDetail from "../pages/UserOrderDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 회원가입, 로그인 */}
        {/* <Route path="/" element={<Example />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* user 접근가능 */}
        <Route path="/restaurant-list" element={<Main />} />
        <Route path="/order" element={<UserOrder />} />

        {/* owner 접근가능 */}
        <Route path="/restaurant/:id" element={<OwnerMenu />} />
        <Route path="/restaurant/add/:id" element={<OwnerAddMenu />} />
        <Route path="/:id/menu-list" element={<OwnerOrders />} />

        {/* 둘 다 접근 가능 */}
        <Route path="/order/:orderid" element={<OrderDetail />} />
        {/* <Route path="/order/:id" element={<UserOrderDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
