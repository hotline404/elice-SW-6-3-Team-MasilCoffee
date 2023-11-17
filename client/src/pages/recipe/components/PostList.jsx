import React from "react";
import * as S from "../Recipe.style";
import { BsChat } from "react-icons/bs";
import postData from "../postData.json";

const PostList = () => {
  return (
    <>
      {postData.map((post) => (
        <S.PostWrap>
          <S.Container>
            <div>
              <S.PostNickname>{post.nickname}</S.PostNickname>
              <S.PostDate>{post.date}</S.PostDate>
            </div>
            <S.PostPre>{post.post}</S.PostPre>
            <S.CommentWrap>
              <BsChat />
              <S.CommentNum>{post.comment}</S.CommentNum>
            </S.CommentWrap>
          </S.Container>
        </S.PostWrap>
      ))}
    </>
  );
};

export default PostList;
