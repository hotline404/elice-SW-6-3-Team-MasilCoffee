import { useState } from "react";
import styled from "styled-components";
import AdminSidebar from "../../components/layout/AdminSidebar";
import AdminTab from "../../components/layout/AdminTab";

const Admin = () => {
  const [currTab, setCurrTab] = useState("트랙");

  const handleClickTab = (tab) => {
    setCurrTab(tab);
  };

  return (
    <>
      {/* header */}
      <Container>
        <AdminSidebar />
        <AdminTab currTab={currTab} onClick={handleClickTab} />
      </Container>
      {/* footer */}
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 88px;
  background-color: #f4f4f4;
`;

export default Admin;
