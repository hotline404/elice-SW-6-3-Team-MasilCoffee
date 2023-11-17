import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminSidebar = ({ orderCount }) => {
  return (
    <Sidebar>
      <SidebarCategory>
        <StyledLink to="/admin/order">주문내역</StyledLink>
        <OrderCount>{orderCount}</OrderCount>
      </SidebarCategory>
      <SidebarCategory>
        <StyledLink to="/admin/menu">메뉴관리</StyledLink>
      </SidebarCategory>
      <SidebarCategory>
        <StyledLink to="/admin/user">회원관리</StyledLink>
      </SidebarCategory>
    </Sidebar>
  );
};

AdminSidebar.defaultProps = { orderCount: 1 };

const Sidebar = styled.div`
  height: 100vh;
  width: 16.7%;
  background-color: #8e0e28;
`;

const SidebarCategory = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 6.8%;
  box-size: border-box;
  border-bottom: solid 0.8px #650818;
`;

const OrderCount = styled.p`
  margin: 0;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  background-color: white;
`;

const StyledLink = styled(Link)`
  color: #f5f5f5;
  font-size: 18px;
  text-decoration: none;
`;

export default AdminSidebar;
