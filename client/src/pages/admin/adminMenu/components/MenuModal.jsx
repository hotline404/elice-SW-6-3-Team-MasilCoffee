import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Modal from "./style/Modal.style";
import MenuSelect from "./MenuSelect";
import { TiDelete } from "react-icons/ti";
import { actionGetAllProducts, actionCreateProduct, actionUpdateProduct } from "../../../../redux/action/productAction";
import { createProduct, updateProduct } from "../../../../api/product";

const MenuModal = ({ title, closeModal, modifyProduct }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);

  const sizeOptions = ["선택없음", "Tall", "Large"];
  const tempOptions = ["선택없음", "Ice", "Hot"];
  const categoryOptions = ["선택없음", "에스프레소", "논커피", "스무디", "티", "에이드"];

  const formData = new FormData();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [temp, setTemp] = useState("");
  const [kcal, setKcal] = useState("");
  const [info, setInfo] = useState("");
  const [file, setFile] = useState("");
  const [recipe, setRecipe] = useState("");
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    price: "",
    category: "",
    size: "",
    temp: "",
    kcal: "",
    info: "",
    file: "",
    recipe: "",
  });

  formData.append("name", name);
  formData.append("price", price);
  formData.append("category", category);
  formData.append("size", size);
  formData.append("temp", temp);
  formData.append("kcal", kcal);
  formData.append("info", info);
  formData.append("file", file);
  formData.append("recipe", recipe);

  useEffect(() => {
    if (modifyProduct) {
      setEditedProduct({ ...modifyProduct[0] });
      console.log(modifyProduct);
    } else {
      setEditedProduct({
        name: "",
        price: "",
        category: "",
        size: "",
        temp: "",
        kcal: "",
        info: "",
        file: "",
        recipe: "",
      });
    }
  }, [modifyProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const entry of formData.entries()) {
      console.log(entry);
    }

    const fn = async () => {
      if (modifyProduct) {
        //console.log("modifyProduct", modifyProduct[0]._id);
        try {
          const updatedProduct = await updateProduct(modifyProduct[0]._id, formData, token);
          console.log("updatedProduct", updatedProduct);
          dispatch(actionUpdateProduct(updatedProduct));
          //dispatch(actionGetAllProducts());
        } catch (error) {
          console.error("Failed to update product", error);
        }
      } else {
        try {
          const newProduct = await createProduct(formData, token);
          dispatch(actionCreateProduct(newProduct));
          //dispatch(actionGetAllProducts());
        } catch (error) {
          console.error("Failed to create product", error);
        }
      }
    };
    fn();

    closeModal();
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
            <Modal.Input
              type="text"
              name="name"
              defaultValue={editedProduct.name || ""}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </Modal.P>
          <Modal.P>
            <Modal.Label>가격 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input
                type="number"
                name="price"
                defaultValue={editedProduct.price || ""}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                required
              />
              <Modal.CurrencyText>원</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>
          <Modal.P>
            <Modal.Label>종류 :</Modal.Label>
            <MenuSelect
              options={categoryOptions}
              modal
              name="category"
              defaultValue={editedProduct.category || ""}
              onChange={(selected) => {
                setCategory(selected);
              }}
            />
          </Modal.P>
          <Modal.P>
            <Modal.Label>사이즈 :</Modal.Label>
            <MenuSelect
              options={sizeOptions}
              modal
              name="size"
              defaultValue={editedProduct.size || ""}
              onChange={(selected) => {
                setSize(selected);
              }}
            />
          </Modal.P>
          <Modal.P>
            <Modal.Label>ICE/HOT :</Modal.Label>
            <MenuSelect
              options={tempOptions}
              modal
              name="temp"
              defaultValue={editedProduct.temp || ""}
              onChange={(selected) => {
                setTemp(selected);
              }}
            />
          </Modal.P>
          <Modal.P>
            <Modal.Label>1회 제공량 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input
                type="number"
                name="kcal"
                defaultValue={editedProduct.kcal || ""}
                onChange={(e) => {
                  setKcal(e.target.value);
                }}
                required
              />
              <Modal.CurrencyText>kcal</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>
          <Modal.TextareaBox>
            <Modal.Label>상세 설명 :</Modal.Label>
            <textarea
              name="info"
              cols="30"
              rows="3"
              defaultValue={editedProduct.info || ""}
              onChange={(e) => {
                setInfo(e.target.value);
              }}
              required
            />
          </Modal.TextareaBox>
          <Modal.Label>사진 추가 :</Modal.Label>
          <Modal.ImgBox>
            <Modal.ImgLabel htmlFor="file">파일 선택</Modal.ImgLabel>
            <input
              type="file"
              id="file"
              name="file"
              defaultValue={editedProduct.file || ""}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              required
            />
            <p>{file && file.name}</p>
          </Modal.ImgBox>
          <Modal.TextareaBox large>
            <Modal.Label>꿀조합 추천 정보 :</Modal.Label>
            <textarea
              name="recipe"
              cols="30"
              defaultValue={editedProduct.recipe || ""}
              onChange={(e) => {
                setRecipe(e.target.value);
              }}
              rows="3"
              required
            />
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
