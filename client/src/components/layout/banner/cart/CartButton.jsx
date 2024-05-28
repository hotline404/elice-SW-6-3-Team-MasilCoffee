import React from "react";
import { ROUTES } from "../../../../router/Routes";
import { useNavigate } from "react-router-dom";
import { ControllIcon } from "../Banner.style";

function CartButton(props) {
  const nav = useNavigate();

  const handleClick = () => {
    nav(ROUTES.CART.path);
  };

  return (
    <div>
      <ControllIcon onClick={handleClick} location={props.location} />
    </div>
  );
}
export default CartButton;
