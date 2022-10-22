import React, { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Button from "../elem/Button";
import OrderDetailList from "../features/orders/OrderDetailList";

// 주문상세페이지
function OrderDetail() {
  const [isOwner, setIsOwner] = useState(true);
  return (
    <>
      <Header />
      <Layout>
        <OrderDetailList></OrderDetailList>
        {isOwner && <Button>ACCEPT</Button>}
        {isOwner && <Button>CANCEL</Button>}
      </Layout>
    </>
  );
}

export default OrderDetail;
