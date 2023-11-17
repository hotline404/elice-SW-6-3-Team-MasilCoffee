import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props, ref) => {
  return (
    <TheBox>
      <Label>{props.input.name}</Label>
      <InputArea ref={ref} {...props.input} />
    </TheBox>
  );
});

export default Input;

const TheBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`; 

const Label = styled.h3`
  
  

`;

const InputArea = styled.input`
  
  width: 703px;
  height: 77px;
  border: none;
`;
