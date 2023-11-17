import { useState } from "react";
import * as Orders from "./Style_Order";
import AdminSidebar from "../../../components/layout/AdminSidebar";
import OrderTab from "./components/OrderTab";
import OrderReceipt from "./components/OrderReceipt";
import OrderDone from "./components/OrderDone";

const Admin = () => {
  const [currTab, setCurrTab] = useState("접수 대기");

  const handleClickTab = (tab) => {
    setCurrTab(tab);
  };

  return (
    <>
      {/* header */}
      <Orders.Container>
        <AdminSidebar />
        <Orders.Content>
          <OrderTab currTab={currTab} onClick={handleClickTab} />
          {currTab === "접수 대기" ? <OrderReceipt /> : <OrderDone />}
        </Orders.Content>
      </Orders.Container>
      {/* footer */}
    </>
  );
};

export default Admin;
