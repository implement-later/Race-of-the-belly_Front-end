import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OwnerMenuCard from "../../components/OwnerMenuCard";
import { __getMenuByIdThunk } from "../../redux/modules/menulistSlice";

const OwnerMenuList = () => {
  const { id } = useParams();
  const menuList = useSelector((state) => state.menulist.menulistByResId.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMenuByIdThunk(id));
  }, [dispatch, id]);

  return (
    <>
      {menuList?.map((menu) => (
        <OwnerMenuCard menu={menu} key={menu.id} />
      ))}
    </>
  );
};

export default OwnerMenuList;
