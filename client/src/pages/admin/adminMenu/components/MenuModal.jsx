import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import * as Modal from "./style/Modal.style";
import MenuSelect from "./MenuSelect";
import { TiDelete } from "react-icons/ti";
import { actionCreateProduct } from "../../../../redux/action/productAction";
import { createProduct } from "../../../../api/product";

const MenuModal = ({ title, closeModal }) => {
  const dispatch = useDispatch();
  // const formRef = useRef(null);

  const size = ["Tall", "Large"];
  const temp = ["Ice", "Hot"];
  const category = ["에스프레소", "논커피", "스무디", "티", "에이드"];

  const [formData, setFormData] = useState(new FormData());

  const [selectedFile, setSelectedFile] = useState(null);
  // const [selectedSize, setSelectedSize] = useState("Tall");
  // const [selectedCategory, setSelectedCategory] = useState("에스프레소");
  // const [selectedTemp, setSelectedTemp] = useState("Ice");
  //const formData = new FormData();
  // const handleInputChange = (name, value) => {
  //   //const newFormData = new FormData(formData);
  //   //newFormData.append(name, value);
  //   //formData.append(name, value);
  //   setFormData((prevFormData) => {
  //     const newFormData = new FormData(prevFormData); // 기존 상태를 복사하여 새 FormData 생성
  //     newFormData.append(name, value); // 새로운 값 추가

  //     return newFormData;
  //   });
  //   // setFormData({
  //   //   ...formData,
  //   //   [name]: value,
  //   // });
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedFile(file);
  //   //const newFormData = new FormData();
  //   //newFormData.append("image", file);
  //   console.log("imgfile", file);
  //   //setFormData(...formData, newFormData);
  //   // setFormData({
  //   //   ...formData,
  //   //   newFormData,
  //   // });
  //   setFormData((prevFormData) => {
  //     const newFormData = new FormData(prevFormData); // 기존 상태를 복사하여 새 FormData 생성
  //     newFormData.append("image", file); // 새로운 값 추가

  //     return newFormData;
  //   });
  // };

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => {
      const newFormData = new FormData(); // Create a new FormData object
      // Copy existing data to the new object
      for (const [key, val] of prevFormData.entries()) {
        newFormData.append(key, val);
      }
      // Append the new value
      newFormData.append(name, value);
      return newFormData;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log("imgfile", file);
    setFormData((prevFormData) => {
      const newFormData = new FormData(); // Create a new FormData object
      // Copy existing data to the new object
      for (const [key, val] of prevFormData.entries()) {
        newFormData.append(key, val);
      }
      // Append the new file
      newFormData.append("image", file);
      return newFormData;
    });
  };

  console.log("formData123", formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    //const formData = new FormData();
    //const selectedValue = formRef.current.value;
    //formData.append("image", selectedFile);
    // formData.append("size", selectedSize);
    // formData.append("category", selectedCategory);
    // formData.append("temp", selectedTemp);
    // formData.append(
    //   "image",
    //   new Blob([JSON.stringify(selectedFile)], {
    //     type: "application/json",
    //   })
    // );
    // formData.append("image", selectedFile);

    for (const pair of FormData.entries()) {
      console.log("formDataPair", pair);
    }

    const fn = async () => {
      try {
        console.log("서버 전 데이터", formData);
        const newProducts = await createProduct(formData);
        console.log("서버에 전송된 데이터", newProducts);
        dispatch(actionCreateProduct(newProducts));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  };

  return (
    <Modal.ModalBackground>
      <Modal.ModalBox>
        <Modal.Title>
          <p>{title}</p>
          <TiDelete className="cancelIcon" onClick={closeModal} />
        </Modal.Title>
        <Modal.Form onSubmit={handleSubmit}>
          <Modal.P>
            <Modal.Label>이름 :</Modal.Label>
            <Modal.Input type="text" name="name" onChange={(e) => handleInputChange("name", e.target.value)} required />
          </Modal.P>
          <Modal.P>
            <Modal.Label>가격 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input type="number" name="price" onChange={(e) => handleInputChange("price", e.target.value)} required />
              <Modal.CurrencyText>원</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>
          <Modal.P>
            <Modal.Label>종류 :</Modal.Label>
            <MenuSelect options={category} modal name="category" onChange={(selected) => handleInputChange("category", selected)} />
          </Modal.P>
          <Modal.P>
            <Modal.Label>사이즈 :</Modal.Label>
            <MenuSelect options={size} modal name="size" onChange={(selected) => handleInputChange("size", selected)} />
          </Modal.P>
          <Modal.P>
            <Modal.Label>ICE/HOT :</Modal.Label>
            <MenuSelect options={temp} modal name="temp" onChange={(selected) => handleInputChange("temp", selected)} />
          </Modal.P>
          <Modal.P>
            <Modal.Label>1회 제공량 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input type="number" name="kcal" onChange={(e) => handleInputChange("kcal", e.target.value)} required />
              <Modal.CurrencyText>kcal</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>
          <Modal.TextareaBox>
            <Modal.Label>상세 설명 :</Modal.Label>
            <textarea name="info" cols="30" rows="3" onChange={(e) => handleInputChange("info", e.target.value)} required />
          </Modal.TextareaBox>
          <Modal.Label>사진 추가 :</Modal.Label>
          <Modal.ImgBox>
            <Modal.ImgLabel htmlFor="file">파일 선택</Modal.ImgLabel>
            <input type="file" id="file" onChange={handleFileChange} name="image" required />
            <p>{selectedFile && selectedFile.name}</p>
          </Modal.ImgBox>
          <Modal.TextareaBox large>
            <Modal.Label>꿀조합 추천 정보 :</Modal.Label>
            <textarea name="bestCombo" cols="30" onChange={(e) => handleInputChange("bestCombo", e.target.value)} rows="3" required />
          </Modal.TextareaBox>

          <Modal.Submit type="submit" onClick={handleSubmit}>
            제출하기
          </Modal.Submit>
        </Modal.Form>
      </Modal.ModalBox>
    </Modal.ModalBackground>
  );
};

export default MenuModal;
