import React from "react";
import { UserTitle } from "../mypageComponent/MyPage.style";


function Title(props) {
  return (
    <div>
      <UserTitle>{props.children}</UserTitle>
    </div>
  );
}

export default Title;
