import React from "react";
import Input from "../elem/Input";
import Label from "../elem/Label";
import styled from "styled-components";

const CustomerOrderCard = ({ menu }) => {
  return (
    <div>
      <Label name={menu.menuName}>{menu.menuName}</Label>
      <span>{menu.price}</span>
      <Input type="number" min="0" max="10" />
    </div>
  );
};

export default CustomerOrderCard;
