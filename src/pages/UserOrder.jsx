import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Layout from "../components/Layout";
import AddOrderForm from "../features/orders/AddOrderForm";

//주문페이지(customer)
function UserOrder() {
  return (
    <>
      <Header />
      <Layout>
        <AddOrderForm></AddOrderForm>
      </Layout>
    </>
  );
}

export default UserOrder;
