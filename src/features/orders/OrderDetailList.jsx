import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MenuCard from "../../components/MenuCard";
import { __getOrderDetailThunk } from "../../redux/modules/orderlistSlice";

const OrderDetailList = () => {
  //   const { id } = useParams();
  const orderdetail = useSelector((state) => state.orderdetail.orderdetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getOrderDetailThunk(5));
  }, [dispatch]);

  return (
    <div>
      {orderdetail[0]?.map((item) => (
        <MenuCard key={item.id} item={item}></MenuCard>
      ))}
    </div>
  );
};

export default OrderDetailList;
// new Date().getTime()
