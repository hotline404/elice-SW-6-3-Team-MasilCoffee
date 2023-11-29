import React from "react";
import * as Modal from "./style/Modal.style";

const DynamicInput = ({ handleRemoveInput, id, name = null, price = null }) => {
  const newInput = (
    <>
      <Modal.Input type="text" name="name" placeholder="예) 1샷" defaultValue={name} required />
      <Modal.Input type="number" name="price" placeholder="0" defaultValue={price} required />
      <Modal.MinusIcon onClick={() => handleRemoveInput(id)} />
    </>
  );

  return <Modal.AddInput>{newInput}</Modal.AddInput>;
};

export default DynamicInput;
