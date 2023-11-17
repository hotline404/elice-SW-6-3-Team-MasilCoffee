import React from "react";

import Contents from "../../../../components/ui/contents/Contents";
import LinkTo from "../../../../components/ui/Link/LinkTo";

import { CommentTitle } from "../../style/MyPage.style";
import { ListTag, TextBox, PaginationItem, Paginamtion } from "../../style/CommentList.style"

function CommentList({ comments }) {
  return (
    <div>
      <CommentTitle>내가 작성한 글</CommentTitle>
      <Contents>
        <li>
          <div>
            
          </div>
        </li>
        {comments.map((comment) => {
          return (
            <ListTag>
              <TextBox>{comment.num}</TextBox>
              <TextBox>
                <LinkTo there={{ to: "#", name: comment.title }} />
              </TextBox>
              <TextBox>{comment.date}</TextBox>
            </ListTag>
          );
        })}
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
  comments: [
    {
      title: "인생의 회전목마",
      date: "2023.11.17",
      num: 1,
    },
    {
      title: "인생은 회전목마",
      date: "2023.11.17",
      num: 2,
    },
    {
      title: "인생은 트로이목마",
      date: "2023.11.17",
      num: 3,
    },
    {
      title: "인생이 회전목마",
      date: "2023.11.17",
      num: 4,
    },
    {
      title: "인생과 회전목마",
      date: "2023.11.17",
      num: 5,
    },
    {
      title: "인생과 트로이목마",
      date: "2023.11.17",
      num: 6,
    },
    {
      title: "인생은 회전적토마",
      date: "2023.11.17",
      num: 7,
    },
  ],
};
