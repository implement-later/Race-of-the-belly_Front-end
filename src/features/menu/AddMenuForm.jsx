import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../elem/Button";
import Input from "../../elem/Input";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { __addMenuThunk } from "../../redux/modules/menulistSlice";

const AddMenuForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [menuObj, setMenuObj] = useState({
    menuName: "",
    price: "",
    desc: "",
    retaurantId: id,
  });

  const { menuName, price, desc } = menuObj;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setMenuObj({ ...menuObj, [name]: value });
    console.log(menuObj);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__addMenuThunk(menuObj));
  };

  return (
    <Stform onSubmit={onSubmitHandler}>
      <Input
        type="text"
        name="menuName"
        value={menuName}
        onChange={onChangeHandler}
        placeholder="음식명"
      ></Input>
      <textarea
        value={desc}
        name="desc"
        id=""
        cols="30"
        rows="10"
        onChange={onChangeHandler}
        placeholder="음식 설명"
      ></textarea>
      <Input
        type="number"
        name="price"
        onChange={onChangeHandler}
        value={price}
        placeholder="가격"
      />
      <Button>ADD</Button>
    </Stform>
  );
};

export default AddMenuForm;

const Stform = styled.form`
  display: flex;
  flex-direction: column;
`;
