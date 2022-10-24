import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const Header = () => {
  return (
    <StDiv>
      <div>LOGO</div>
      <span></span>
      <StBtn>Logout</StBtn>
    </StDiv>
  );
};

export default Header;

const StDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #fcbe32;
  justify-content: space-between;
  padding-right: 30px;
`;
const StBtn = styled(Button)`
  height: 50px;
  width: 100px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.subC};
  border-radius: 20px;
  transition: 0.5s ease-in-out;
  :hover {
    color: white;
    background-color: ${(props) => props.theme.subC};
  }
`;
