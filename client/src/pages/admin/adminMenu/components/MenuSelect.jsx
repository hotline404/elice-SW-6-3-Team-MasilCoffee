import React from "react";
import styled, { css } from "styled-components";

const MenuSelect = ({ options, modal = null, onChange = null }) => {
  if (!options) {
    return null;
  }

  return (
    <Selection modal={modal} onChange={onChange}>
      {options.map((op, i) => {
        return (
          <option value={op} key={op + i}>
            {op}
          </option>
        );
      })}
    </Selection>
  );
};

const Selection = styled.select`
  width: 220px;
  height: 40px;
  background-color: #efefef;
  padding: 0.55rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 40px 0 0 40px;
  font-size: 16px;
  color: #2e2e2e;
  border-radius: 3px;

  ${(props) =>
    props.modal &&
    css`
      width: 192px;
      height: 32px;
      background-color: white;
      margin: 0;
      font-size: 15px;
      padding: 0 0 0 15px;
      border: 1px solid #e5e4e4;
    `}
`;

export default MenuSelect;
