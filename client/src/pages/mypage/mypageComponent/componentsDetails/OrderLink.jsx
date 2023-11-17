import { Link } from "react-router-dom";
import React from "react";
import * as S from "../MyPage.style";

function OrderLink() {
  return (
    <div>
      <Link to="/OrderDetails" style={{textDecoration: "none"}}>
        <S.OrderLinkBox>Link to Order</S.OrderLinkBox>
      </Link>
    </div>
  );
}

export default OrderLink;
