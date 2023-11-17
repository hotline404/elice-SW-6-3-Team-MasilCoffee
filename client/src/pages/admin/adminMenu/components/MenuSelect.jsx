import React from "react";
import styled from "styled-components";

const MenuSelect = ({ options }) => {
  if (!options) {
    return null;
  }

  return (
    <Selection>
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
`;

export default MenuSelect;
