import React from "react";
import * as Search from "./Style_UserSearch";

const UserSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(formData);
  };

  return (
    <Search.Container>
      <Search.Title>회원 검색</Search.Title>
      <Search.Form onSubmit={handleSubmit}>
        <Search.P>
          <Search.Label>전체 :</Search.Label>
          <Search.Checkbox name="name" required />
        </Search.P>
        <Search.P>
          <Search.Label>이름 :</Search.Label>
          <Search.Checkbox type="text" name="name" required />
          <Search.Input type="text" name="name" required />
        </Search.P>
        <Search.P>
          <Search.Label>전화번호 :</Search.Label>
          <Search.Checkbox type="text" name="name" required />
          <Search.Input type="number" name="price" required />
        </Search.P>

        <Search.Submit type="submit" onClick={handleSubmit}>
          제출하기
        </Search.Submit>
      </Search.Form>
    </Search.Container>
  );
};

export default UserSearch;
