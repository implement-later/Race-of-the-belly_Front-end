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
    dispatch(__getRestaurantList(1));
  }, []);

  return (
    <>
      {mainlist && mainlist.length > 0
        ? mainlist.map((val, idx) => {
            return (
              <StDiv
                key={idx}
                mg="20px 0px 0px 30px"
                pd="30px"
                wd="300px"
                hg="200px"
                inline="background: #e1eef6 ; "
                onClick={() => {
                  navigate(`/order/${val.id}`);
                }}
              >
                <Stdiv>
                  <div>{val.id}</div>
                  <div>{val.restaurantName}</div>
                  <div>{val.restaurantUsername}</div>
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
