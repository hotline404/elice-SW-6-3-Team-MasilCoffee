import styled from "styled-components";

export const Table = styled.table`
  width: 100%;

  th,
  td {
    border-bottom: 1px solid black;
    padding: 12px;
  }

  td {
    height: 60px;
  }
`;

export const Button = styled.td`
  // padding: 10px 20px;
  // background-color: transparent;
  // border: none;
  // cursor: pointer;
  // position: relative;

  // /* padding 내부에 배경색 적용 */
  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: 5px; /* padding top에 맞게 조절 */
  //   bottom: 5px; /* padding bottom에 맞게 조절 */
  //   left: 5px; /* padding left에 맞게 조절 */
  //   right: 5px; /* padding right에 맞게 조절 */
  //   background-color: pink; /* 원하는 배경색 */
  //   z-index: -1; /* 내부 배경색이 버튼 아래에 위치하도록 설정 */
  // }
`;
