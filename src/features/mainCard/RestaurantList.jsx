import React from "react";
import MainCard from "../../components/MainCard";
import { useSelector } from "react-redux";
function RestaurantList() {
  const restaurantlist = useSelector(
    (state) => state.restaurantlist.restaurantlist
  );
  // console.log(restaurantlist);
  return (
    <>
      <MainCard />
      {/* {restaurantlist.map((restaurantlist) => (
        <MainCard
          restaurantlist={restaurantlist}
          key={restaurantlist.restaurantName}
        />
      ))} */}
    </>
  );
}

export default RestaurantList;
