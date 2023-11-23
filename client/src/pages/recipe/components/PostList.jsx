import React from "react";
import * as S from "./style/Post.style";
import { Container } from "../Recipe.style";
import { BsChat } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import ImageSlider from "./ImageSlider";
import DateFormat from "../../../util/DateFormat/DateFormat";

const PostList = ({ post }) => {
  const createDate = DateFormat("dateTime", post.createdAt);

  return (
    <>
      <Container>
        <div>
          <S.PostNickname>닉네임</S.PostNickname>
          <S.PostDate>{createDate}</S.PostDate>
        </div>
        <S.PostPre>{post.post}</S.PostPre>
        {post.image.length > 0 && <ImageSlider images={post.image} />}
        <S.CommentWrap>
          <S.HeartWrap>
            <GoHeart
              style={{
                fontSize: "1.4rem",
              }}
            />
            <S.CommentNum>110</S.CommentNum>
          </S.HeartWrap>
          <BsChat
            style={{
              fontSize: "1.2rem",
              transform: "scaleX(-1)",
              marginRight: "1px",
            }}
          />
          <S.CommentNum>13</S.CommentNum>
        </S.CommentWrap>
      </Container>
    </>
  );
};

export default PostList;
