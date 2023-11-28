import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as S from "./style/Post.style";
import { Container, StyledLink } from "../Recipe.style";
import { BsChat } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import ImageSlider from "./ImageSlider";
import DateFormat from "../../../util/DateFormat/DateFormat";
import RandomColor from "../../../util/RandomColor/RandomColor";
import { deleteBoard } from "../../../api/board";
import { actionRemoveBoard } from "../../../redux/action/boardAction";

const PostList = ({ post, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const userId = useSelector((state) => state.user.user_id); //로그인 한 유저 아이디
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); //나중에 값 바꿔야함!
  const createDate = DateFormat("dateTime", post.createdAt);

  const handleLikedClick = (event) => {
    event.preventDefault();
    
    setLiked((prevLiked) => !prevLiked);
    setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  }

  const handleDelete = (event, boardId) => {
    event.preventDefault();
    
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      const fn = async () => {
        try {
          await deleteBoard(token, boardId);
          dispatch(actionRemoveBoard(boardId));
        } catch (error) {
          console.error("PostList.jsx-", error);
        }
      }
      fn();

      navigate("/Recipe")
    }
  }

  return (
    <>
      {post && (
        <Container>
          <div>
            <S.PostNickname>{post.nickname}</S.PostNickname>
            <S.PostDate>{createDate}</S.PostDate>
            {type === "view" && post.user === userId && (
              <S.EditDeleteWrap>
                <StyledLink to={"/RecipeWrite"} state={{ post: post._id }}>
                  <S.EditDelete>수정</S.EditDelete>
                </StyledLink>
                <span>│</span>
                <S.EditDelete onClick={(e) => handleDelete(e, post._id)}>
                  삭제
                </S.EditDelete>
              </S.EditDeleteWrap>
            )}
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
            <S.CommentNum>13</S.CommentNum> {/*나중에 값 바꿔야함*/}
          </S.CommentWrap>
        </Container>
      )}
    </>
  );
};

export default PostList;
