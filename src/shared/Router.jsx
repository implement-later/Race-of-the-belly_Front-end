import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/restaurant-list" element={<Main />} />
        <Route path="/order" element={<UserOrder />} />
        {/* <Route path="/order/:id" element={<UserOrderDetail />} /> */}
        <Route path="/auth/:id/menu-list" element={<OwnerMenu />} />
        <Route path="/:id/menu-list" element={<OwnerOrders />} />
        <Route path="/order/:orderid" element={<OrderDetail />} />
        <Route path="/:id/menu-list" element={<OwnerAddMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
