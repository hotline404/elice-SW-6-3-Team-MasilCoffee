import { useState } from "react";
import * as Orders from "./Style_Order";
import AdminSidebar from "../../../components/layout/AdminSidebar";
import AdminTab from "../../../components/layout/AdminTab";
import OrderReceipt from "../../../components/ui/adminOrderDetail/OrderReceipt";
import OrderDone from "../../../components/ui/adminOrderDetail/OrderDone";

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
          <AdminTab currTab={currTab} onClick={handleClickTab} />
          {currTab === "접수 대기" ? <OrderReceipt /> : <OrderDone />}
        </Orders.Content>
      </Orders.Container>
      {/* footer */}
    </>
  );
};

export default Admin;
