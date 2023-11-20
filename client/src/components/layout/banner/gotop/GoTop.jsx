import React from "react";

const img_data = {
  red: "/assets/images/top.png",
  white: "/assets/images/topWhite.png",
};

function GoTop(props) {
  const src = props.location === "/Recipe" ? img_data.white : img_data.red;


  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(typeof(src))



  return (
    <div>
      <img
        src={src}
        onClick={handleClick}
      />
    </div>
  );
}

export default GoTop;
