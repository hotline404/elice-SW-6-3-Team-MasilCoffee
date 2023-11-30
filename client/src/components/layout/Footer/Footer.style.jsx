import styled from "styled-components";
import IncludeRedPage from "../../../util/IncludeRedPage";
import backgroundColor from "../../../util/BackgoundColor";

export const Footers = styled.footer`
  background: ${(props) => backgroundColor(props.location)};
`;

export const FooterText = styled.p`
  color: ${(props) => (IncludeRedPage(props.location) ? "#8e0e28" : "#f5f5f5")};

  font-size: 14px;
  font-weight: 400;
`;

export const TextBox = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;
