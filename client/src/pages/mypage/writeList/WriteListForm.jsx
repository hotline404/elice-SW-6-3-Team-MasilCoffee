import React, { useState } from 'react'
import { Paginamtion, PaginationItem } from '../style/CommentList.style'
import { StyledTable } from '../style/StyledTable'
import { CommentTitle } from '../style/MyPage.style';

import { usePagination } from '../../../hooks/usePagination';



function WriteListForm({trData, tdData}) { 


  const [page, setPage] = useState()


  const pageConst = {
    totalCount: tdData.length,  
    pageSize: 10,     
    siblingCount: 1,  
    currentPage: page,   
  }
  
  const totalCount = pageConst.totalCount;
  const pageSize = pageConst.pageSize;
  const siblingCount = pageConst.siblingCount;
  const currentPage = pageConst.currentPage;

  console.log(tdData.length)

  const pageArr = usePagination(pageConst);
  console.log("pageArr", pageArr)

  const handleClick = (e) => {
    setPage(parseInt(e.target.name, 10));
  }

  return (
      <div>
      <CommentTitle>내가 작성한 글</CommentTitle>
      {tdData.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((item, index) => (
          <StyledTable index={index} trData={trData} tdData={item}/>
        ))}
        
        <Paginamtion>
          <PaginationItem href="#">&laquo;</PaginationItem>
          <div>
            {pageArr.map(arr => {
              return (
                <PaginationItem name={arr} href="#" onClick={handleClick}>{arr}</PaginationItem>
              )
            })}
          </div>
          <PaginationItem href="#">&raquo;</PaginationItem>
        </Paginamtion>

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
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["2", "인생의 회전적토마", "2021.12.25" ],
    ["3", "인생의 회전적토마", "2021.12.25" ],
    ["4", "인생의 회전적토마", "2021.12.25"],
    ["5", "인생의 회전적토마", "2021.12.25"],
    ["6", "인생의 회전적토마", "2021.12.25"],
    ["7", "인생의 회전적토마", "2021.12.25"],
    ["8", "인생의 회전적토마", "2021.12.25"],
    ["9", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
  ],
}

