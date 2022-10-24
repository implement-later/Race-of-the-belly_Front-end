import React, { useEffect } from "react";
import Wrapper from "../elem/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { __getList } from "../redux/modules/restaurantlistSlice/restaurantSlice";

const MainCard = () => {
  const { restaurantlist } = useSelector((state) => state.restaurantlist);
  console.log(restaurantlist);

  const dispatch = useDispatch();

  // dispatch(__getList());

  return (
    <>
      <span>
        <h1>Restaurant List</h1>
      </span>
      <Wrapper
        mg="20px auto"
        pd="30px"
        wd="300px"
        hg="200px"
        inline="background: #e1eef6 ;"
      >
        <div>{restaurantlist.thumbnail}</div>
        <div>{restaurantlist.restaurantName}</div>
      </Wrapper>
    </>
  );
};

export default MainCard;
