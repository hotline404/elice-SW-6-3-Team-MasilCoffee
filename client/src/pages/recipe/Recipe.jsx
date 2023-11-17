import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Recipe.style";
import CategoryButton from "./components/CategoryButton";
import PostList from "./components/PostList";
import PostInput from "./components/PostInput";

const Recipe = () => {
  return (
    <S.Background>
      <S.ContainerWrap>
        <S.Container>
          <S.Wrap>
            <S.Title>나만의 꿀조합 공유</S.Title>
            <Link to="/RecipeWrite" >
              <S.Button>작성하기</S.Button>
            </Link>
          </S.Wrap>
          <PostInput />
          <CategoryButton />
        </S.Container>
        <PostList />
      </S.ContainerWrap>
    </S.Background>
  );
};

export default Recipe;
