import styled from "styled-components";
import backgroundColor from "../../../util/BackgoundColor";
import { media } from "../../../util/mediaQ/media";
import { back_ground_color, txt_color } from "../../../type/color_type";

export const LeftSide = styled.span`
  margin-left: 62px;
  display: flex;

  /* 미디어 쿼리 활용 */
  ${media.medium`
    display: ${(props) => (props.display ? "none" : "flex")};
    backgound: ${back_ground_color.sub_color};
    color: ${txt_color.sub_color};
  `}

  ${media.mini`
    display: none;
  `}
`;

export const RightSide = styled.span`
  margin-right: 62px;
  display: flex;
  

  ${media.mini`
    display: none;
  `}
`;

export const Header = styled.header`
  height: 88px;

  background: ${(props) => backgroundColor(props.location)};
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
display: none;
margin-right: 0px;
background: ${back_ground_color.main_color};
width: 100px;
height: 100%;
border: none;
font-size: 180%;
align-items: center;
align-content: center;
justify-content: center;
text-align: center;

  ${media.medium`
    display: flex;
    flex: 1;
    background: ${back_ground_color.main_color};
    color: ${txt_color.sub_color};
  `}
`;

export const MiniLogo = styled.img`
  display: none;
  cursor: pointer;
  width: 100px;

  ${media.mini`
  display: block;
`}
`;

export const HeaderBtn = styled.button`
  display: none;
  margin-right: 0px;
  background: ${back_ground_color.main_color};
  width: 100px;
  height: 100%;
  border: none;
  font-size: 180%;
  color: ${back_ground_color.sub_color};

  ${media.mini`
display: block;
`}
`;


export const LinkBox = styled.div`
display: flex;
${media.medium`
    display: none;
  `}
${media.mini`
display: none;
`}
`;