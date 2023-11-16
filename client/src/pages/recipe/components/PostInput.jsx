import React from "react";
import {Wrap, SearchInput, Button} from "../Recipe.style";

const PostInput = () => {
  return (
    <Wrap>
      <SearchInput type="text" placeholder="검색어 입력" />
      <Button>검색</Button>
    </Wrap>
  );
}

export default PostInput;