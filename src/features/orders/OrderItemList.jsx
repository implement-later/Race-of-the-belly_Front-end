import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomerOrderCard from "../../components/CustomerOrderCard";
import Button from "../../elem/Button";
import { __getMenuByIdThunk } from "../../redux/modules/menulistSlice";

const OrderItemList = () => {
  // 레스토랑 id를 받아서 그 id값으로 restaurant가 가진 menulist를 받아온다.
  //   const {id} = useParams();
  const menuList = useSelector((state) => state.menulist.menulist);
  const dispatch = useDispatch();

  //menuList에 각 obj에 menuCnt property 추가
  const initArr = menuList.map((obj) => ({ ...obj, menuCnt: 0 }));

  const [orderList, setOrderList] = useState([...initArr]);
  console.log(orderList);

  useEffect(() => {
    dispatch(__getMenuByIdThunk(1));
  }, [dispatch]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const changeArr = initArr.map((obj) => obj);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {menuList?.map((menu) => (
        <CustomerOrderCard key={menu.id} menu={menu} />
      ))}
      <Button>Order</Button>
    </form>
  );
};

export default OrderItemList;
