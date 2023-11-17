import React from "react";
import *as S from '../ConfirmPassword.style';
import { InputArea } from "../ConfirmPassword.style";

const Input = React.forwardRef((props, ref) => {
  return <div>
      <InputArea ref={ref} {...props.input}/>
  </div>
});

export default Input;
  