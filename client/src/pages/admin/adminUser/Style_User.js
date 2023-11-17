import styled from "styled-components";
import Table from "../../../components/ui/table/Table";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 88px;
  background-color: #f9f9f9;
`;

export const Content = styled.div`
  flex: 1;
  margin: 70px 70px;
`;

export const Search = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  margin-bottom: 65px;
  background-color: white;
`;

export const Title = styled.div`
  font-size: 26px;
  margin: 30px 0 0 40px;
`;

export const TableBox = styled(Table)`
  background-color: white;
`;
