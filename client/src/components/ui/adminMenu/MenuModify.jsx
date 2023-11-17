import React from "react";
import MenuSelect from "../../../components/ui/adminMenu/MenuSelect";
import { TiDelete } from "react-icons/ti";

const MenuModify = () => {
  const size = ["tall", "large"];
  const temp = ["Ice", "Hot"];

  return (
    <div>
      <div>
        <p>메뉴 수정</p>
        <TiDelete />
      </div>
      <form action="">
        이름 : <input type="text" name="name" required />
        종류 : <input type="text" name="category" required />
        가격 : <input type="text" name="price" required />
        사이즈 : <MenuSelect option={size} />
        ICE/HOT : <MenuSelect option={temp} />
        1회 제공량 : <input type="text" name="kcal" required />
        상세 설명 : <textarea name="description" cols="30" rows="5" />
        사진 추가 :
      </form>
    </div>
  );
};

export default MenuModify;
