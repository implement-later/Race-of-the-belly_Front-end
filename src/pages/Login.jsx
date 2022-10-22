import { useNavigate } from "react-router-dom";
import Wrapper from "../elem/Wrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addUsers } from "../redux/modules/login/loginSlice";

function Login() {
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

    dispatch(__addUsers(input));
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
        <button typut="submit">Login</button>
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

// function Modal(props) {
//   return (
//     <>
//       <label>Restaurant Name : </label>
//       <input
//         type="text"
//         name="isRestaurant"
//         onChange={(e) => {
//           props.setIsRestaurant(e.target.value);
//         }}
//         value={props.isRestaurant || ""}
//       />
//     </>
//   );
// }

export default Login;
