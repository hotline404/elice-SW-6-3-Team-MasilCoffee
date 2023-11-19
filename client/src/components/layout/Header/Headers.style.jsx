import styled from "styled-components";

export const LeftSide = styled.span`
  margin-left: 62px;
  display: flex;
`;

export const RightSide = styled.span`
  margin-right: 62px;
  display: flex;
`;

export const Header = styled.header`

  height: 88px;

  background: ${props => (props.location === "/Recipe") ? "#F5F5F5" : "#8e0e28"};
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;


