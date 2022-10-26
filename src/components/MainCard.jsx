import React, { useEffect, useState, useLocation } from "react";
import Wrapper from "../elem/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { __getRestaurantList } from "../redux/modules/restaurantSlice";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const MainCard = () => {
  const mainlist = useSelector((state) => state.restaurantlist.restaurantlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { params } = useParams(1);
  console.log(mainlist);
  const id = useEffect(() => {
    dispatch(__getRestaurantList(1));
  }, []);

  return (
    <>
      <StDiv
        mg="20px 0px 0px 30px"
        pd="30px"
        wd="300px"
        hg="200px"
        inline="background: #e1eef6 ; "
        onClick={() => {
          navigate("/order/:restaurantId");
        }}
      >
        <Stdiv>
          <div>현재 페이지의 파라미터는 {params} 입니다</div>
          <Img>123</Img>
          <StDiv1>asd</StDiv1>
        </Stdiv>
      </StDiv>
    </>
  );
};

export default MainCard;
const Stdiv = styled.div`
  font-size: 30px;
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
  display: flex;
  flex-wrap: wrap;
`;

const StDiv1 = styled.div``;
