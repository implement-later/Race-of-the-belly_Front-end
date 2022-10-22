import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../elem/Wrapper";
import { useState } from "react";

function SignUp() {
  const [modal, setModal] = useState(false);
  const [checkd, setCheckd] = useState(false);
  const navigate = useNavigate();
  return (
    <Wrapper
      mg="20px auto"
      pd="30px"
      wd="50%"
      hg="80%"
      inline="background: #e1eef6;"
    >
      <h1>SignUp</h1>
      <form>
        <lable>ID : </lable>
        <input type="text" name="username" />
        <br />
        <lable>Nick Name : </lable>
        <input type="text" name="name" />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" />
        <br />
        <label htmlFor="password">Password Confirm : </label>
        <input type="password" />
        <br />
        <input
          onChange={() => {
            setModal(true);
            setCheckd(true);
          }}
          type="radio"
          name="isRestaurant"
        />
        Owner check
        <p />
        {modal == true ? <Modal /> : null}
        <br />
        <button
          onClick={() => {
            navigate("login");
          }}
          typut="button"
        >
          Sign up
        </button>
      </form>
    </Wrapper>
  );
}

function Modal() {
  return (
    <>
      <lable>Restaurant Name : </lable>
      <input type="text" name="isRestaurant" />
    </>
  );
}

export default SignUp;
