import styled from "styled-components";

export const Footers = styled.footer`
  height: 150px;

  background: ${props => (props.location === "/Recipe" ? "#f5f5f5" : "#8e0e28")};
`;


export const FooterText = styled.p`
  color: ${props => (props.location === "/Recipe" ? "#8e0e28" : "#f5f5f5")};

  font-size: 14px;
  font-weight: 400;
`;

export const textBox = styled.div`
  marigin: 14px;
`