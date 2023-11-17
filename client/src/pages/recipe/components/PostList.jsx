import React from "react";
import { Link } from "react-router-dom";
import * as S from "../Recipe.style";
import { BsChat } from "react-icons/bs";
import postData from "../postData.json";
import ImageSlider from "./ImageSlider";

const PostList = () => {
  return (
    <>
      {postData.map((post) => (
        <S.PostWrap>
          {/* <Link to="/RecipeView" style={{ textDecoration: "none", color: "black" }}> */}
            <S.Container>
              <div>
                <S.PostNickname>{post.nickname}</S.PostNickname>
                <S.PostDate>{post.date}</S.PostDate>
              </div>
              <S.PostPre>{post.post}</S.PostPre>
              <ImageSlider />
              <S.CommentWrap>
                <BsChat />
                <S.CommentNum>{post.comment}</S.CommentNum>
              </S.CommentWrap>
            </S.Container>
          {/* </Link> */}
        </S.PostWrap>
      ))}
    </>
  );
};

export default PostList;
