import React, { useEffect } from "react";
import Wrapper from "../elem/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { __getCustomerList } from "../redux/modules/customerlistSlice";
import { __getRestaurantList } from "../redux/modules/restaurantSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OrderCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.customerlist.customerlist);
  // const mainlist = useSelector((state) => state.restaurantlist.restaurantlist);
  // console.log(mainlist);
  console.log(list);
  // useEffect(() => {
  //   dispatch(__getRestaurantList(mainlist));
  // }, []);
  console.log(1);
  useEffect(() => {
    dispatch(__getCustomerList(list));
  }, []);
  console.log(1);
  return (
    <>
      <StDiv
        mg="20px auto"
        pd="30px"
        wd="300px"
        hg="200px"
        inline="background: #e1eef6 ; "
        onClick={() => {
          navigate("/owner/:restaurantId");
        }}
      >
        <Stdiv>
          <StDiv1>asd</StDiv1>
          <Img>123</Img>
        </Stdiv>
      </StDiv>
    </>
  );
};

export default OrderCard;
const Stdiv = styled.div`
  font-size: 30px;
  border: none;
  border-radius: 24px;
`;

const Img = styled.div`
  background: white;
  inline-size: block;
`;

const StDiv = styled(Wrapper)`
  border: 3px solid #fcbe32;
  border-radius: 24px;
  background: #eaeef6;
  width: 300px;
`;

const StDiv1 = styled.div``;
