import React, { useEffect, useState } from "react";
import Wrapper from "../elem/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { __getList } from "../redux/modules/restaurantlistSlice/restaurantSlice";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const MainCard = () => {
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  // const list = useSelector((state) => state.restaurantlist.restaurantlist);
  // console.log(list);

  // const menu = list.find((restaurantlist) => restaurantlist.id === Number(id));

  // const { restaurantName } = useParams;
  // useEffect(() => {
  //   dispatch(__getList(restaurantName));
  // }, [dispatch, restaurantName]);
  // console.log(restaurantName);
  // const restaurantlist = useSelector(
  //   (state) => state.restaurantlist.restaurantlist
  // );

  // const dispatch = useDispatch();
  // const list = useSelector((state) => state.restaurantlist.restaurantlist);

  // const initialState = { ...menu };
  // const [menuObj, setMenuObj] = useState(initialState);
  // const { restaurantName, thumbnail } = menuObj;
  // // const dispatch = useDispatch();
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
