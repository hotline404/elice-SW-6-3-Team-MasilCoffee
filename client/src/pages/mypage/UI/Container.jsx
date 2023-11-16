import React from "react";
import * as S from "../mypageComponent/MyPage.style"

function Container(props) {
  return <S.Container>{props.children}</S.Container>;
}

export default Container;
