import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../elem/Wrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addUsers } from "../../redux/modules/login/loginSlice";
import styled from "styled-components";

function Userlogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state.user);
  const [isRestaurant, setIsRestaurant] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();

    const input = {
      id: username,
      password: password,
      isRestaurant,
    };

    if (username === "") return alert("아이디를 입력하세요");
    if (password === "") return alert("패스워드를 입력하세요");

    dispatch(__addUsers(input));
    if (isRestaurant === false) {
      navigate("/restaurant-list");
    } else {
      navigate("/restaurant/:id");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Divbox>
        <Wrapper
          mg="100px auto"
          pd="30px"
          wd="500px"
          hg="50%%"
          inline="background: #e1eef6; border:none; border-radius: 24px;
       "
        >
          <h1>Login</h1>
          <br />
          <form onSubmit={(e) => onSubmitHandle(e)}>
            <InputBox>
              <input
                type="text"
                name="username"
                placeholder="아이디"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username || ""}
              />
              <label htmlFor="username">아이디</label>
            </InputBox>
            <br />
            <InputBox>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password || ""}
              />
              <label htmlFor="password">비밀번호</label>
              <br />
            </InputBox>
            <StyledLabel htmlFor="Owner">
              <StyledInput
                type="checkbox"
                name="isRestaurant"
                defaultChecked={false}
                onChange={(e) => {
                  setIsRestaurant(e.target.checked);
                }}
              />
              <StyledP>Owner</StyledP>
            </StyledLabel>
            <br />
            <Button type="submit">Login</Button>
            <br />
            <Button
              onClick={() => {
                navigate("signup");
              }}
              type="button"
            >
              Sign up
            </Button>
          </form>
        </Wrapper>
      </Divbox>
    </>
  );
}

export default Userlogin;

const InputBox = styled.div`
  position: relative;
  margin: 10px 0;
  & input {
    background: transparent;
    border: none;
    border-bottom: solid 1px #ccc;
    padding: 20px 0px 5px 0px;
    font-size: 14pt;
    width: 100%;
  }
  & input ::placeholder {
    color: transparent;
  }
  & input:placeholder-shown + label {
    color: #aaa;
    font-size: 14pt;
    top: 15px;
  }
  & input:focus + label,
  label {
    color: #8aa1a1;
    font-size: 10pt;
    pointer-events: none;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
  &input:focus,
  input:not(:placeholder-shown) {
    border-bottom: solid 1px #8aa1a1;
    outline: none;
  }
`;

const StyledInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;

const Button = styled.button`
  background: white;
  border-radius: 20px;
  height: 50px;
  width: 400px;
  border: 1px solid #fcbe32;
  margin: 30px 20px;
  :hover {
    color: white;
    background: #fcbe32;
  }
`;

const Divbox = styled.div`
  display: grid;
  place-items: center;
`;
