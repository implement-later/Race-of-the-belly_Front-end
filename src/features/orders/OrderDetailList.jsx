import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MenuCard from "../../components/MenuCard";
import { __getOrderDetailThunk } from "../../redux/modules/orderlistSlice";

const OrderDetailList = () => {
  const { orderId } = useParams();
  const orderdetail = useSelector(
    (state) => state.orderdetail.orderdetail.data.orderDetailsList
  );

  console.log(orderdetail);
  const dispatch = useDispatch();

  //retaurant id로 메뉴조회
  useEffect(() => {
    dispatch(__getOrderDetailThunk(orderId));
  }, [dispatch, orderId]);

  return (
    <div>
      {orderdetail?.map((item) => (
        <MenuCard key={item.menuId} item={item}></MenuCard>
      ))}
    </div>
  );
};

export default OrderDetailList;
// new Date().getTime()
