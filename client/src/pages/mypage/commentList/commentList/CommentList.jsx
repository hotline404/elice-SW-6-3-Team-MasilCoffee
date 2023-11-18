import React from "react";

import Contents from "../../../../components/ui/contents/Contents";
import LinkTo from "../../../../components/ui/Link/LinkTo";
import Container from "../../../../components/ui/container/Container";

import { CommentTitle } from "../../style/MyPage.style";
import {
  ListTag,
  TextBox,
  PaginationItem,
  Paginamtion,
} from "../../style/CommentList.style";
import { StyledTable } from "../../style/StyledTable";
import Card from "../../../../components/ui/card/Card";

function CommentList({ trData, tdData }) {
  return (
    <div>
      <CommentTitle>내가 작성한 글</CommentTitle>
      <Contents>

          <StyledTable trData={trData} tdData={tdData} />

        <Paginamtion>
          <PaginationItem href="#">&laquo;</PaginationItem>
          <PaginationItem href="#">1</PaginationItem>
          <PaginationItem href="#">2</PaginationItem>
          <PaginationItem href="#">3</PaginationItem>
          <PaginationItem href="#">4</PaginationItem>
          <PaginationItem href="#">5</PaginationItem>
          <PaginationItem href="#">6</PaginationItem>
          <PaginationItem href="#">&raquo;</PaginationItem>
        </Paginamtion>
      </Contents>
    </div>
  );
}

export default CommentList;

CommentList.defaultProps = {
  trData: ["번호", "제목", "날짜"],
  tdData: [
    ["1", "인생의 회전적토마", "ASDf@naver.com"],
    ["2", "인생의 회전적토마", "ASDf@naver.com"],
    ["3", "인생의 회전적토마", "ASDf@naver.com"],
    ["4", "인생의 회전적토마", "ASDf@naver.com"],
    ["5", "인생의 회전적토마", "ASDf@naver.com"],
    ["6", "인생의 회전적토마", "ASDf@naver.com"],
    ["7", "인생의 회전적토마", "ASDf@naver.com"],
    ["8", "인생의 회전적토마", "ASDf@naver.com"],
    ["9", "인생의 회전적토마", "ASDf@naver.com"],
    ["10", "인생의 회전적토마", "ASDf@naver.com"],
  ],
};
