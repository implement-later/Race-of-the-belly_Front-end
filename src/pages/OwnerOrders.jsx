import React from "react";
import OrderCards from "../components/OrderCard";
import Header from "../components/Header";
import Layout from "../components/Layout";

//order 접근, customer의 주문이 보여짐
function OwnerOrders() {
  return (
    <>
      <Header />
      <Layout>
        <OrderCards />
      </Layout>
    </>
  );
}

export default OwnerOrders;
