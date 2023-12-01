import styled from "styled-components";
import IncludeRedPage from "../../../util/IncludeRedPage";
import backgroundColor from "../../../util/BackgoundColor";
import { back_ground_color, txt_color } from "../../../type/color_type";

export const Footers = styled.footer`
  background: ${(props) => backgroundColor(props.location)};
`;

export const FooterText = styled.p`
  color: ${(props) =>
    IncludeRedPage(props.location)
      ? txt_color.main_color
      : txt_color.sub_color};

  font-size: 14px;
  font-weight: 400;
`;

export const TextBox = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;
