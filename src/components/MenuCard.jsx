import React from "react";
import styled from "styled-components";

const MenuCard = ({ item }) => {
  return (
    <>
      <Stdiv>
        <div>{item.menuName}</div> <div>{item.menuPrice}원</div>{" "}
        <div>{item.menuCnt}개</div>
      </Stdiv>
    </>
  );
};

export default MenuCard;

const Stdiv = styled.div`
  display: flex;
  font-size: 30px;
`;
