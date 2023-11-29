import React, { useState } from "react";
import * as Modal from "./style/Modal.style";
import MenuSelect from "./MenuSelect";
import { TiDelete } from "react-icons/ti";
import DynamicInput from "./OptionAddInputs";

import axios from "axios";

const OptionModal = ({ options, title, closeModal }) => {
  const [selectedOption, setSelectedOption] = useState("");
  //const [showInput, setShowInput] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  const [inputComponents, setInputComponents] = useState([]);
  const [inputOptionValues, setInputOptionValues] = useState({});

  const optionName = ["선택없음", "얼음", "드리즐", "휘핑", "우유"];

  const handleSelectChange = (selected) => {
    setSelectedOption(selected.target.value);
    console.log("selected", selected.target.value);

    const optionData = options.filter((option) => option.key === selectedOption);

    setInputOptionValues(optionData.value);
    console.log(inputOptionValues);
    //setShowInput(false);
  };

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  const handleAddInput = () => {
    console.log(inputComponents);
    const newId = Math.random().toString(36).substring(7);
    const newInput = {
      id: newId,
      content: <DynamicInput key={newId} handleRemoveInput={handleRemoveInput} id={newId} />,
    };
    setInputComponents((prevInputs) => [...prevInputs, newInput]);
  };

  const handleRemoveInput = (id) => {
    setInputComponents((prevInputs) => prevInputs.filter((input) => input.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const form = e.target; // 현재 이벤트가 발생한 폼 요소를 가져옴

    // 폼 요소의 각 필드를 FormData에 추가
    for (let i = 0; i < form.length; i++) {
      const field = form[i];
      if (field.name) {
        formData.append(field.name, field.value);
      }
    }
  };

  return (
    <Modal.ModalBackground>
      <Modal.ModalBox>
        <Modal.Title>
          <p>{title}</p>
          <TiDelete className="cancelIcon" onClick={closeModal} />
        </Modal.Title>
        <Modal.OptionFormBox>
          <Modal.Form onSubmit={handleSubmit}>
            <Modal.OptionP>
              <Modal.Label>옵션명 :</Modal.Label>
              <MenuSelect options={optionName} modal name="optionName" value={selectedOption} onChange={handleSelectChange} />
            </Modal.OptionP>
            <Modal.DetailInputBox>
              <Modal.OptionP>
                <Modal.Label>세부항목 :</Modal.Label>
                <Modal.Input type="text" name="name" placeholder="예) 1샷" required />
              </Modal.OptionP>
              <Modal.OptionP>
                <Modal.Label>가격 :</Modal.Label>
                <Modal.Input type="number" name="price" placeholder="0" required />
              </Modal.OptionP>
              <Modal.PlusIcon onClick={handleAddInput} />
            </Modal.DetailInputBox>
            {inputComponents.map((input, index) => (
              <div key={input.id}>{input.content}</div>
            ))}
            <Modal.OptionSubmit type="submit" onClick={handleSubmit}>
              옵션 추가하기
            </Modal.OptionSubmit>
          </Modal.Form>
        </Modal.OptionFormBox>
        <Modal.AllOption />
      </Modal.ModalBox>
    </Modal.ModalBackground>
  );
};

OptionModal.defaultProps = {
  options: [
    {
      샷: {
        에스프레소: 600,
      },
    },
    {
      시럽: {
        바닐라: 600,
        헤이즐넛: 600,
        카라멜: 600,
      },
    },
    {
      얼음: {
        없음: 0,
        보통: 0,
        적게: 0,
        많이: 0,
      },
    },
    {
      휘핑: {
        없음: 0,
        보통: 0,
        적게: 0,
        많이: 0,
      },
    },
    {
      드리즐: {
        없음: 0,
        초콜릿: 600,
        카라멜: 600,
      },
    },
    {
      우유: {
        없음: 0,
        일반: 0,
        저지방: 0,
        무지방: 0,
        오트: 0,
        두유: 0,
      },
    },
  ],
};

export default OptionModal;
