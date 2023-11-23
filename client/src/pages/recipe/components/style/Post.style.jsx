import styled from "styled-components";

//게시글 닉네임
export const PostNickname = styled.span`
  font-weight: bold;
`;

//게시글 날짜
export const PostDate = styled.span`
  font-size: 0.8rem;
  margin-left: 15px;
`;

//게시글
export const PostPre = styled.pre`
  font-size: 1rem;
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0.5rem 0;
`;

//댓글, 좋아요 감싸는 div
export const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

// 좋아요 div
export const HeartWrap = styled.div`
  display: flex;

  &:hover {
    color: red;
  }
`;

//댓글, 좋아요 갯수
export const CommentNum = styled.span`
  margin-left: 3px;
  width: 40px;
`;