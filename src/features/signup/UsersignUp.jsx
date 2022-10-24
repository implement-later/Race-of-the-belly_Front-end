import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../elem/Wrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addUsers } from "../../redux/modules/login/loginSlice";

function UsersignUp() {
  //이름 , 비밀번호, 비밀번호 확인, 오너, 식당이름, 닉네임
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [isRestaurant, setIsRestaurant] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [nickName, setNickName] = useState("");

  //오류메시지 상태저장
  const [usernameMessage, setUsernameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  //유효성 검사
  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();

    const input = {
      id: username,
      password: password,
      isRestaurant,
      restaurantName,
      nickName,
    };

    setUsername("");
    setPassword("");
    setRestaurantName("");
    setPasswordConfirm("");

    dispatch(__addUsers(input));
    navigate("/");
  };

  // username: 닉네임은 최소 4자 이상, 12자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다. ^[a-zA-Z0-9]{4,12}$

  // password: 비밀번호는 최소 8자 이상, 20자 이하 알파벳 대소문자, 숫자(0-9), 특수문자로 구성됩니다. ^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$

  const usernameRegEx = /^[a-zA-Z0-9]{4,12}$/;

  const usernameCheck = (username) => {
    if (username.match(usernameRegEx) === null) {
      setIsName(false);
      setUsernameMessage("아이디 형식을 확인해주세요");
      return;
    } else {
      setIsName(true);
      setUsernameMessage("아이디 형식이 맞아요");
    }
  };

  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/;
  const passwordCheck = (password) => {
    if (password.match(passwordRegEx) === null) {
      setIsPassword(false);
      setPasswordMessage("비밀번호 형식을 확인해주세요");
      return;
    } else {
      setIsPassword(true);
      setPasswordMessage("비밀번호 형식이 맞아요");
    }
  };
  const passwordDoubleCheck = (password, passwordConfirm) => {
    if (password !== passwordConfirm) {
      setIsPasswordConfirm(false);
      setPasswordConfirmMessage("비밀번호가 다릅니다.");
      return;
    } else {
      setIsPasswordConfirm(true);
      setPasswordConfirmMessage("비밀번호가 동일합니다");
    }
  };
  return (
    <Wrapper
      mg="20px auto"
      pd="30px"
      wd="50%"
      hg="80%"
      inline="background: #e1eef6;"
    >
      <h1>SignUp</h1>
      <form onSubmit={(e) => onSubmitHandle(e)}>
        <label>Username : </label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
            usernameCheck(e.target.value);
          }}
          value={username || ""}
          required
        />
        {username.length > 0 && (
          <span className={`message ${isName ? "success" : "error"}`}>
            {usernameMessage}
          </span>
        )}
        <br />
        <span>
          닉네임은 최소 4자 이상, 12자 이하 알파벳 대소문자, 숫자로 구성됩니다.
        </span>
        <br />
        <label>Nick Name : </label>
        <input
          type="text"
          name="nickName"
          placeholder="nickName"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
          value={nickName || ""}
          required
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
            passwordCheck(e.target.value);
          }}
          value={password || ""}
          required
        />
        {password.length > 0 && (
          <span className={`message ${isPassword ? "success" : "error"}`}>
            {passwordMessage}
          </span>
        )}
        <br />
        <span>
          비밀번호는 최소 8자 이상, 20자 이하 알파벳 대소문자, 숫자, 특수문자로
          구성됩니다.
        </span>
        <br />
        <label htmlFor="password">Password Confirm : </label>
        <input
          type="text"
          name="passwordConfirm"
          placeholder="passwordConfirm"
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
            passwordDoubleCheck(password, e.target.value);
          }}
          value={passwordConfirm || ""}
          required
        />
        {passwordConfirm.length > 0 && (
          <span
            className={`message ${isPasswordConfirm ? "success" : "error"}`}
          >
            {passwordConfirmMessage}
          </span>
        )}
        <br />
        <input
          type="checkbox"
          name="isRestaurant"
          defaultChecked={false}
          onChange={(e) => {
            setIsRestaurant(e.target.checked);
          }}
        />
        Owner check
        <p />
        {isRestaurant === true ? (
          <Modal
            restaurantName={restaurantName}
            setRestaurantName={setRestaurantName}
          />
        ) : null}
        <br />
        <button type="submit">Sign up</button>
      </form>
    </Wrapper>
  );
}

function Modal(props) {
  return (
    <>
      <label>Restaurant Name : </label>
      <input
        type="text"
        name="restaurantName"
        placeholder="restaurantName"
        onChange={(e) => {
          props.setRestaurantName(e.target.value);
        }}
        value={props.restaurantName || ""}
        required
      />
    </>
  );
}

export default UsersignUp;
