import React from "react";
import { ROUTES } from "../../../../router/Routes";
import { useNavigate } from "react-router-dom";
import IncludeRedPage from "../../../../util/IncludeRedPage";
import includeCianPage from "../../../../util/includeCianPage";
import backgroundColor from "../../../../util/BackgoundColor";

const img_data = {
  red: "/assets/images/Cart.png",
  white: "/assets/images/CartWhite.png",
};

function CartButton(props) {
  const nav = useNavigate();

  const src = IncludeRedPage(props.location) ? img_data.white : img_data.red;

  const chooseImg = (location) => {
    switch (backgroundColor(location)) {
      case "#F5F5F5":
        {
          return img_data.white;
        }
        break;
      case "#8e0e28":
        {
          return img_data.red;
        }
        break;
      case "#34393E": {
        return null;
      }
    }
  };

  const handleClick = () => {
    nav(ROUTES.CART.path);
  };

  return (
    <div>
      <img src={chooseImg(props.location)} onClick={handleClick} />
    </div>
  );
}
export default CartButton;
