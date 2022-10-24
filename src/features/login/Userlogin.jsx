import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../elem/Wrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addUsers } from "../../redux/modules/login/loginSlice";

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
    <Wrapper
      mg="20px auto"
      pd="30px"
      wd="50%"
      hg="80%"
      inline="background: #e1eef6;"
    >
      <h1>Login</h1>
      <form onSubmit={(e) => onSubmitHandle(e)}>
        <label>🔑 : </label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username || ""}
        />
        <br />
        <label htmlFor="password">🔒 : </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password || ""}
        />
        <br />
        <p>
          <input
            type="checkbox"
            name="isRestaurant"
            defaultChecked={false}
            onChange={(e) => {
              setIsRestaurant(e.target.checked);
            }}
          />
          Owner check
          <br />
        </p>
        <button type="submit">Login</button>
        <br />
        <button
          onClick={() => {
            navigate("signup");
          }}
          type="button"
        >
          Sign up
        </button>
      </form>
    </Wrapper>
  );
}

export default Userlogin;
