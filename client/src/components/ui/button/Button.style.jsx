import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  padding: 15px 30px;
  font-size: 15px;

  &.Button_grey {
    background-color: #ececec;
    color: #8e0e28;
  }
  &.Button_red {
    background-color: #8e0e28;
    color: white;
  }
`;
