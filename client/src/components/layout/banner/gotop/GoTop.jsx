import React from "react";

const img_data = {
  red: "../../../../../public/assets/images/Cart.png",
  white: "../../../../../public/assets/images/CartWhite.png",
};

function GoTop(props) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <img
        src={props.location === "/Recipe" ? img_data.white : img_data.red}
        onClick={handleClick}
      />
    </div>
  );
}

export default GoTop;
