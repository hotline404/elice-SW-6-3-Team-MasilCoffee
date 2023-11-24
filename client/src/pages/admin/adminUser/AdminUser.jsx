import React, { useState } from "react";
import * as Users from "./AdminUser.style";
import AdminSidebar from "../../../components/layout/Sidebar/Sidebar";
import UserSearch from "./components/UserSearch";
import Table from "../../../components/ui/table/Table";
import { usePagination } from "../../../hooks/usePagination";
import sliceTen from "../../../util/forPagenation/sliceTen";

const AdminUser = ({ trData, tdData }) => {
  const [page, setPage] = useState(1);

  const pageConst = {
    totalCount: tdData.length,
    pageSize: 10,
    siblingCount: 1,
    currentPage: page,
  };

  const pageArr = usePagination(pageConst);

  const slicedData = sliceTen({
    currentPage: pageConst.currentPage,
    pageSize: pageConst.pageSize,
    initDataSet: tdData,
  });

  const handleClick = (e) => {
    setPage(parseInt(e.target.name, 10));
  };

  return (
    <>
      <Users.Container>
        <AdminSidebar />
        <Users.Content>
          <UserSearch />
          <Users.TableBox>
            <Table trData={trData} tdData={slicedData} isMenuTable={true} />
          </Users.TableBox>
          <Users.Pagination>
            <Users.PaginationItem href="#">&laquo;</Users.PaginationItem>
            <div>
              {pageArr.map((arr) => {
                return (
                  <Users.PaginationItem name={arr} href="#" onClick={handleClick}>
                    {arr}
                  </Users.PaginationItem>
                );
              })}
            </div>
            <Users.PaginationItem href="#">&raquo;</Users.PaginationItem>
          </Users.Pagination>
        </Users.Content>
      </Users.Container>
    </>
  );
};

AdminUser.defaultProps = {
  trData: ["이름", "아이디", "이메일", "전화번호", "닉네임", "등급"],
  tdData: [
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
    ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  ],
};

export default AdminUser;
