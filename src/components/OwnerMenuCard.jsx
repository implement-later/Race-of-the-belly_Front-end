import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import Input from "../elem/Input";
import { __delMenuByMenuIdThunk } from "../redux/modules/menulistSlice";
import {
  clearMenu,
  __getMenuThunk,
  __updateMenuThunk,
} from "../redux/modules/menuSlice";

const OwnerMenuCard = ({ menu }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const menuItem = useSelector((state) => state.menu.menu);
  const initialState = { ...menu };
  const [menuObj, setMenuObj] = useState(initialState);
  const [updateMenu, setUpdateMenu] = useState();

  const { menuName, price } = menuObj;
  // console.log(menu);
  useEffect(() => {
    dispatch(__getMenuThunk(menu.id));
    return () => dispatch(clearMenu());
  }, [dispatch, menu.id]);

  useEffect(() => {
    setUpdateMenu(menuItem);
  }, [menuItem]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setMenuObj({ ...menuObj, [name]: value });
  };

  const editChangeHandler = () => {
    if (menuName.trim() === "" || price.trim() === "") {
      return alert("입력된 내용이 없습니다.");
    }
    if (isEdit) {
      dispatch(__updateMenuThunk({ ...menuObj }));
    }
    setIsEdit(!isEdit);
  };

  const delBtnHandler = () => {
    dispatch(__delMenuByMenuIdThunk(menu.id));
  };

  return (
    <>
      <Stdiv>
        {!isEdit ? (
          <>
            <div>{menuItem.menuName}</div> <div>{menuItem.price}원</div>
            <Button onClick={delBtnHandler}>삭제</Button>
            <Button onClick={editChangeHandler}>수정</Button>
          </>
        ) : (
          <>
            <Input type="text" name="menuName" onChange={onChangeHandler} />
            <Input type="number" name="price" onChange={onChangeHandler} />
            <Button type="submit" onClick={editChangeHandler}>
              완료
            </Button>
            {/* <Button onClick={delBtnHandler}>삭제</Button> */}
          </>
        )}
      </Stdiv>
    </>
  );
};

export default OwnerMenuCard;

const Stdiv = styled.div`
  display: flex;
  font-size: 30px;
`;
