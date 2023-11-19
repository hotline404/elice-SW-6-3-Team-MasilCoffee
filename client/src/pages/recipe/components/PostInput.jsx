import React from "react";
import { Wrap, SearchInput, Button } from "../Recipe.style";

const PostInput = ({placeholder, text}) => {
  return (
    <Wrap>
      <SearchInput type="text" placeholder={placeholder} />
      <Button>{text}</Button>
    </Wrap>
  );
}

export default PostInput;