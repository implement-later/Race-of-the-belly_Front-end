import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../elem/Wrapper";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    return { ...prev, [name]: value };
  };

  const navigate = useNavigate();
  return (
    <Wrapper
      mg="20px auto"
      pd="30px"
      wd="50%"
      hg="80%"
      inline="background: #e1eef6;"
    >
      <h1>Login</h1>
      <form onSubmit={(e) => onSubmitHandle(e)}>
        <lable>🔑 : </lable>
        <input
          type="text"
          name="username"
          value={username.value}
          onChnage={onChangeHandle}
        />
        <br />
        <label htmlFor="password">🔒 : </label>
        <input
          type="password"
          name="password"
          value={password.value}
          onChnage={onChangeHandle}
        />
        <br />
        <button typut="submit">로그인</button>
        <br />
        <button
          onClick={() => {
            navigate("signup");
          }}
          typut="button"
        >
          Sign up
        </button>
      </form>
    </Wrapper>
  );
}

export default Login;
