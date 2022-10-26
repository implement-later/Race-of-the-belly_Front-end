import React, { useEffect } from "react";
import Wrapper from "../elem/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { __getCustomerlist } from "../redux/modules/customerlistSlice";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OrderCard = () => {
  const newlist = useSelector((state) => state.customerlist.customerlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(newlist);

  useEffect(() => {
    dispatch(__getCustomerlist(1));
  }, []);

  // {restaurantUsername: 'asd', memberUsername: 'assd', price: 13000, id: 1}
  return (
    <>
      123
      {newlist && newlist.length > 0
        ? newlist.map((val, idx) => {
            return (
              <StDiv
                key={idx}
                mg="50px 0px 0px 40px"
                pd="30px"
                wd="300px"
                hg="200px"
                inline="background: #e1eef6 ; "
                onClick={() => {
                  navigate(`/order/${val.id}`);
                }}
              >
                <Stdiv>
                  <div>{val.restaurantUsername}</div>
                  <br />
                </Stdiv>
              </StDiv>
            );
          })
        : ""}
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
