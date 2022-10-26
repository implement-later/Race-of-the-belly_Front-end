import React, { useEffect, useState } from "react";
import Wrapper from "../elem/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { __getRestaurantList } from "../redux/modules/restaurantSlice";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const OrderCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.restaurantlist.restaurantlist);

  // const dispatch = useDispatch();
  // console.log(list);

  // const [list, setList] = useState(null);
  // useEffect(() => {
  //   dispatch(__getList(list));
  // }, []);
  // console.log(list);
  // const item = list[{ createdAt, id, restaurantName, thumbnail }];
  // console.log(item);
  // console.log(createdAt, id, restaurantName, thumbnail);
  // const noway = list.find(
  //   (restaurantlist) => restaurantlist.restaurantName == restaurantName
  // );

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
          <Img>123{list.restaurantName}</Img>
          <StDiv1>asd</StDiv1>
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
