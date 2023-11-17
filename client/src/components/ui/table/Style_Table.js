import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    color: #848a95;
    font-weight: normal;
    padding: 12px 40px;
  }

  td {
    border-bottom: 2px solid #f1f1f1;
    border-top: 2px solid #f1f1f1;
    padding: 12px 40px;
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

export const Button = styled.button`
  // text-align: center;
  // background-clip: content-box;
  // outline: 2px solid #bdbdbd;
  // outline-offset: -30px;
  // outline-radius: 3px;
  // width: 25px;
  background-color: pink;
  border: none;

  // &.edit {
  //   padding-right: 10px;
  // }

  &.deletion {
  }
`;
