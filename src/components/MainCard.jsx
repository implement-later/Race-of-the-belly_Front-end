import React, { useEffect } from "react";
import Wrapper from "../elem/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { __getRestaurantList } from "../redux/modules/restaurantSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainCard = () => {
  const mainlist = useSelector((state) => state.restaurantlist.restaurantlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(mainlist);
  useEffect(() => {
    dispatch(__getRestaurantList());
  }, [dispatch]);

  return (
    <>
      {mainlist && mainlist.length > 0
        ? mainlist.map((restaurant, idx) => {
            return (
              <StDiv
                key={idx}
                mg="50px 0px 0px 40px"
                pd="20px"
                inline="background: #e1eef6 ; "
                onClick={() => {
                  navigate(`/order/${restaurant.restaurantId}`);
                }}
              >
                <Stdiv>
                  <Img src={process.env.PUBLIC_URL + "/img/logo.png"}></Img>
                  <br />
                  <div>{restaurant.name}</div>
                  <br />
                </Stdiv>
              </StDiv>
            );
          })
        : ""}
    </>
  );
};

export default MainCard;

const Stdiv = styled.div`
  font-size: 30px;
`;

const Img = styled.img`
  width: 150px;
  height: 99px;
  object-fit: cover;
  margin: 0px 20px 20px 0px;
  background-color: #eaeef6;
  border-bottom: 5px solid black;
`;

const StDiv = styled(Wrapper)`
  background: #eaeef6;
  width: 200px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  border-style: outset;
  border-radius: 12px;
`;
