import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Users from "./AdminUser.style";
import AdminSidebar from "../../../components/layout/Sidebar/Sidebar";
import UserSearch from "./components/UserSearch";
import Table from "../../../components/ui/table/Table";
import { usePagination } from "../../../hooks/usePagination";
import sliceTen from "../../../util/forPagenation/sliceTen";
import { initUserSearch, search } from "../../../redux/action/user/usersAction";
import { axiosGetUsers } from "../../../api/user/users";

const AdminUser = ({ trData }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [page, setPage] = useState(1);
  const users = useSelector((state) => state.users.users[0]);
  console.log("users", users);
  const tdData = users.map((data) => [data._id, "", data.name, data.email, data.phone, data.nickname, data.role]);
  // const tdDataRef = useRef([]);
  console.log("tdData", tdData);
  useEffect(() => {
    const fn = async () => {
      try {
        const getUsers = await axiosGetUsers(token);
        console.log("getUsers", getUsers);
        const reduxData = dispatch(initUserSearch(getUsers.users));
        console.log("reduxDataaa", reduxData);
        console.log("reduxData", reduxData.payload);
        const searchData = reduxData.payload;
        console.log("searchData", searchData);
        const query = {
          name: "샐러리쿵야",
          phone: "010-0000-4444",
          nickname: "샐러드",
        };

        const filteredData = dispatch(search({ name: query.name, phone: query.phone, nickname: query.nickname }));

        // tdDataRef.current = users.map((data) => [data._id, "", data.name, data.email, data.phone, data.nickname, data.role]);
        console.log("filteredData", filteredData);
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, []);

  const pageConst = {
    totalCount: useRef.current.length,
    pageSize: 10,
    siblingCount: 1,
    currentPage: page,
  };

  const pageArr = usePagination(pageConst);

  const slicedData = sliceTen({
    currentPage: pageConst.currentPage,
    pageSize: pageConst.pageSize,
    initDataSet: useRef.current,
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
  trData: ["이름", "이메일", "전화번호", "닉네임", "등급"],
  // tdData: [
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  //   ["", "", "홍길동", "hong1231", "hong1231@naver.com", "010-1231-1231", "홍카페", "회원"],
  // ],
};

export default AdminUser;
