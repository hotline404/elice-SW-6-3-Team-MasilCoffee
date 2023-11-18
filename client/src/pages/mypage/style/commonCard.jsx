import styled from "styled-components";
import Card from "../../../components/ui/card/Card";

export const PureCard = styled(Card)`
  display: flex;
  flex-direction: row;
  height: 742px;

  justify-content: center;

  margin-top: 63px;
`;

export const TableCard = styled(Card)`
  & > div {display: flex;

  height: 742px;
  min-width: 1000px;

  justify-content: center;

  margin-top: 63px;}
`;
