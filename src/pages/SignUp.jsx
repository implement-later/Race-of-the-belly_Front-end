import { useNavigate } from "react-router-dom";
import Wrapper from "../elem/Wrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addUsers } from "../redux/modules/login/loginSlice";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRestaurant, setIsRestaurant] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [nickName, setNickName] = useState("");

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

    dispatch(__addUsers(input));
    setUsername("");
    setPassword("");
    setRestaurantName("");
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
        <label>ID : </label>
        <input
          type="text"
          pattern="/^[a-z]+[a-z0-9]{5,19}$/g"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username || ""}
        />
        <button>중복체크</button>
        <label>영문자로 시작하는 영문자 또는 숫자 6~20자 </label>
        <br />
        <label>Nick Name : </label>
        <input
          type="text"
          name="name"
          placeholder="nickName"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
          value={nickName || ""}
        />
        <br />
        <label htmlFor="password">Password : </label>
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
        <label htmlFor="password">Password Confirm : </label>
        <input type="password" placeholder="password" />
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
        {isRestaurant == true ? <Modal /> : null}
        <br />
        <button onClick={() => {}} typut="submit">
          Sign up
        </button>
      </form>
    </Wrapper>
  );
}

function Modal() {
  return (
    <>
      <label>Restaurant Name : </label>
      <input type="text" name="isRestaurant" placeholder="restaurantName" />
    </>
  );
}

export default SignUp;
