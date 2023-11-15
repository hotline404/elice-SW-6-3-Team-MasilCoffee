import { useState } from "react";
import * as Orders from "./Style_Order";
import AdminSidebar from "../../../components/layout/AdminSidebar";
import AdminTab from "../../../components/layout/AdminTab";
import OrderReceipt from "./OrderReceipt";

const Admin = () => {
  const [currTab, setCurrTab] = useState("트랙");

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
          <OrderReceipt />
        </Orders.Content>
      </Orders.Container>
      {/* footer */}
    </>
  );
};

export default Admin;
