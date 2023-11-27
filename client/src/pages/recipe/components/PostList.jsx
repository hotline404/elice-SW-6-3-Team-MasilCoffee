import React, { useState } from "react";
import * as S from "./style/Post.style";
import { Container } from "../Recipe.style";
import { BsChat } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import ImageSlider from "./ImageSlider";
import DateFormat from "../../../util/DateFormat/DateFormat";
import RandomColor from "../../../util/RandomColor/RandomColor";

const PostList = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); //나중에 값 바꿔야함!
  const createDate = DateFormat("dateTime", post.createdAt);

  const handleLikedClick = (event) => {
    event.preventDefault();
    
    setLiked((prevLiked) => !prevLiked);
    setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  }

  return (
    <>
      <Container>
        <div>
          <S.PostNickname>닉네임</S.PostNickname>{/*나중에 값 바꿔야함*/}
          <S.PostDate>{createDate}</S.PostDate>
        </div>
        <S.PostPre>{post.post}</S.PostPre>
        {post.image.length > 0 && <ImageSlider images={post.image} />}
        <S.TagWrap>
          <S.TagBox>{post.category}</S.TagBox>
          {post.tags.map((tag, index) => (
            <S.TagBox
              key={index}
              style={{ background: RandomColor(), color: "black" }}
            >
              {tag}
            </S.TagBox>
          ))}
        </S.TagWrap>
        <S.CommentWrap>
          <S.LikedWrap onClick={handleLikedClick} liked={liked}>
            {liked ? (
              <GoHeartFill style={{ fontSize: "1.4rem" }} />
            ) : (
              <GoHeart style={{ fontSize: "1.4rem" }} />
            )}
            <S.CommentNum>{likeCount}</S.CommentNum>
          </S.LikedWrap>
          <BsChat
            style={{
              fontSize: "1.2rem",
              transform: "scaleX(-1)",
              marginRight: "1px",
            }}
          />
          <S.CommentNum>13</S.CommentNum>{/*나중에 값 바꿔야함*/}
        </S.CommentWrap>
      </Container>
    </>
  );
};

export default PostList;
