import React from "react";
import * as Selected from "./style/MenuSelect.style";

const MenuSelect = ({ options, modal = null, name = null, onChange = null }) => {
  if (!options) {
    return null;
  }

  const defaultOption = options[0];

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    if (onChange) {
      onChange(selected);
    }
  };

  return (
    <Selected.Selection modal={modal} onChange={handleSelectChange} defaultValue={defaultOption}>
      {options.map((op, i) => {
        return (
          <option value={op} key={op + i}>
            {op}
          </option>
        );
      })}
    </Selected.Selection>
  );
};

export default MenuSelect;
