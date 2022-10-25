import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CustomerOrderCard from "../../components/CustomerOrderCard";
import Button from "../../elem/Button";
import { __getMenuByIdThunk } from "../../redux/modules/menulistSlice";
import {
  __getOrderingMenuThunk,
  __postOrderMenuThunk,
} from "../../redux/modules/orderlistSlice";
import styled from "styled-components";
import Wrapper from "../../elem/Wrapper";

const OrderItemList = () => {
  const navigate = useNavigate();
  // 레스토랑 id를 받아서 그 id값으로 restaurant가 가진 menulist를 받아온다.
  const { restaurantId } = useParams();
  const menuList = useSelector((state) => state.orderdetail.orderingList);

  const dispatch = useDispatch();

  // 초기에 레스토랑 id에 따라 보여질 메뉴 dispatch해서 reducer의 orderingList 배열에 넣어준다.
  useEffect(() => {
    dispatch(__getOrderingMenuThunk(restaurantId));
  }, [dispatch, restaurantId]);

  const postOrderBtnHandler = () => {
    const removeCntZero = menuList.filter((menu) => menu.menuCnt !== 0);
    dispatch(__postOrderMenuThunk(removeCntZero));
  };

  return (
    <StDiv>
      <StNameDiv>Restaurant Name</StNameDiv>
      <StCategoryDiv>
        <span>메뉴</span>
        <span>가격</span>
        <span>갯수</span>
      </StCategoryDiv>
      <ul>
        {menuList?.map((menu) => (
          <CustomerOrderCard key={menu.menuId} menu={menu} />
        ))}
      </ul>
      <StOrderBtn onClick={postOrderBtnHandler}>Order</StOrderBtn>
    </StDiv>
  );
};

export default OrderItemList;

const StNameDiv = styled(Wrapper)`
  font-size: 30px;
  margin: 25px 0;
  text-align: center;
`;
const StDiv = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  border: 2px solid #fcbe32;
  height: 80vh;
  width: 80%;
  max-width: 800px;
  min-width: 500px;
  border-radius: 30px;
  padding: 15px 40px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
const StCategoryDiv = styled(Wrapper)`
  display: flex;

  span {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 20px;
    padding: 5px 0;
    margin-bottom: 20px;
    position: relative;
  }
  span:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 0px;
    height: 2px;
    margin: 5px 0 0;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.3s;
    opacity: 0;
    background: #ffb000;
  }
  span:hover:after {
    width: 100%;
    opacity: 1;
  }
`;

// ${(props) => props.theme.mainC}

const StOrderBtn = styled(Button)`
  background-color: ${(props) => props.theme.mainC};
  border: 0;
  height: 40px;
  font-size: 20px;
  font-weight: bolder;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
