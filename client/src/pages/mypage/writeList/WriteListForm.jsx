import React from 'react'
import { Paginamtion, PaginationItem } from '../style/CommentList.style'
import { StyledTable } from '../style/StyledTable'
import Contents from '../../../components/ui/contents/Contents'
import { CommentTitle } from '../style/MyPage.style'

function WriteListForm({trData, tdData}) {
  return (
      <div>
      <CommentTitle>내가 작성한 글</CommentTitle>
      <Contents>
        <StyledTable trData={trData} tdData={tdData}/>
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
  )
}

export default WriteListForm

WriteListForm.defaultProps = {
  trData: ["번호", "제목", "작성날짜"],
  tdData: [
    ["1", "인생의 회전적토마", "2021.12.25" ],
    ["2", "인생의 회전적토마", "2021.12.25" ],
    ["3", "인생의 회전적토마", "2021.12.25" ],
    ["4", "인생의 회전적토마", "2021.12.25"],
    ["5", "인생의 회전적토마", "2021.12.25"],
    ["6", "인생의 회전적토마", "2021.12.25"],
    ["7", "인생의 회전적토마", "2021.12.25"],
    ["8", "인생의 회전적토마", "2021.12.25"],
    ["9", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
  ],
}
