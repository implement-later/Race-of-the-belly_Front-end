import React from "react";
import MainCard from "../features/mainCard/RestaurantList";
import Header from "../components/Header";
import Layout from "../components/Layout";

function Main() {
  return (
    <>
      <Header />
      <Layout>
        <MainCard />
      </Layout>
    </>
  );
}

export default Main;
