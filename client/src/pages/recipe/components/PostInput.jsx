import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Wrap, SearchInput } from "../Recipe.style";
import SquareButton from "../../../components/ui/button/SquareButton";
import { actionSearchBoards } from "../../../redux/action/boardAction";

const PostInput = ( props ) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleClick = () => {
    if (props.onInsert) { //Recipe.jsx 검색
      dispatch(actionSearchBoards(query));
      props.onInsert(query);
    } else { //댓글
      console.log("댓글: ", query);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <Wrap>
      <SearchInput
        {...props.input}
        onChange={handleChange}
        value={query}
        onKeyDown={handleKeyDown}
      />
      <SquareButton
        {...props.button}
        onClick={handleClick}
      />
    </Wrap>
  );
};

export default PostInput;
