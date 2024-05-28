import React from "react";
import { useSelector } from "react-redux";
import CartButton from "./cart/CartButton";
import ScrollTop from "./gotop/ScrollTop";
import { StyledBanner, CartCount } from "./Banner.style";
import includeCianPage from "../../../util/includeCianPage";

function Banner(props) {
  const visible = includeCianPage(props.location);
  const orders = useSelector((state) => state.order);
  const cartCount = orders.length;

  return (
    <div>
      {visible ? (
        <></>
      ) : (
        <StyledBanner>
          <ScrollTop location={props.location} />
          <CartCount>{cartCount}</CartCount>
          <CartButton location={props.location} />
        </StyledBanner>
      )}
    </div>
  );
}

export default Banner;
