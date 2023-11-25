import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CategoryWrap, CategoryBtn } from "../Recipe.style";
import {
  actionGetFilter,
  actionRemoveFilter,
  actionSearchBoards,
} from "../../../redux/action/boardAction";

const categorys = [
  {
    id: "filter-espresso",
    name: "에스프레소",
  },
  {
    id: "filter-noncoffee",
    name: "논커피",
  },
  {
    id: "filter-smoothie",
    name: "스무디",
  },
  {
    id: "filter-tea",
    name: "티",
  },
  {
    id: "filter-ade",
    name: "에이드",
  },
];

const CategoryButton = ({ query }) => {
  const dispatch = useDispatch();
  const [activeStates, setActiveStates] = useState(Array(categorys.length).fill(false));
 
  const handleClick = (index, category) => {
    const newActiveStates = [...activeStates];

    if (newActiveStates[index]) { //카테고리 선택된걸 해제
      newActiveStates.fill(false);
    } else { //카테고리 선택하기
      newActiveStates.fill(false);
      newActiveStates[index] = !newActiveStates[index];
    }
    setActiveStates(newActiveStates);

    if (newActiveStates[index]) {
      dispatch(actionGetFilter(category));
    } else {
      dispatch(actionRemoveFilter(category));
    }
    dispatch(actionSearchBoards(query));
  };

  return (
    <CategoryWrap>
      {categorys.map((category, index) => (
        <CategoryBtn
          key={category.id}
          type="button"
          onClick={() => handleClick(index, category.name)}
          className={activeStates[index] ? "active" : ""}
        >
          {category.name}
        </CategoryBtn>
      ))}
    </CategoryWrap>
  );
};

export default CategoryButton;
