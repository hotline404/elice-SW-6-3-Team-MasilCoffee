import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/* 리드온리 직접 전달로 불필요한 조건문 제거 */
/* 구조 분해 할당으로 props 가독성 향상 */
const Input = React.forwardRef(({ input, onChange }, ref) => {
  return (
    <TheBox>
      <Label>{input.name}</Label>
      <InputArea
        ref={ref}
        onChange={onChange}
        {...input}
        readOnly={input.readonly}
      />
    </TheBox>
  );
});

/* 타입 안정화 */
Input.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    readonly: PropTypes.bool,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;

const TheBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
`;

const Label = styled.h3`
  width: 80px;
  text-align: left;
`;

const InputArea = styled.input`
  width: 500px;
  height: 77px;
  border: none;
  margin-left: 30px;

  &:focus {
    outline: none;
  }
`;
