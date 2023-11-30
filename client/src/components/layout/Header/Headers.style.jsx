import styled from "styled-components";
import backgroundColor from "../../../util/BackgoundColor";


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

  background: ${(props) =>
    backgroundColor(props.location)};
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const HeaderImg = styled.img`
  width: 300px;
  cursor: pointer;
`;


export const NavButton = styled.button`
    background: #8e0e28;
    border-radius: 15px;
`