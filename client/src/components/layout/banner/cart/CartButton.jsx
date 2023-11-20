import React from "react";
import { ROUTES } from "../../../../router/Routes";
import { useNavigate } from "react-router-dom";

const img_data = {
  red: "../../../../../public/assets/images/Cart.png",
  white: "../../../../../public/assets/images/CartWhite.png"
}


function CartButton(props) {
  const nav = useNavigate();

  const handleClick = () => {
    nav(ROUTES.CART.path);
  };

  return (
    <div>
      <img src={(props.location === "/Recipe" ? img_data.white : img_data.red)} onClick={handleClick} />
    </div>
  );
}

export default CartButton;
