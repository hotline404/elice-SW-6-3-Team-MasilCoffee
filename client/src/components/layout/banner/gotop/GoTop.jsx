import React from "react";
import IncludeRedPage from "../../../../util/IncludeRedPage";
import backgroundColor from "../../../../util/BackgoundColor";

const img_data = {
  red: "/assets/images/top.png",
  white: "/assets/images/topWhite.png",
};

function GoTop(props) {

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <img src={chooseImg(props.location)} onClick={handleClick} />
    </div>
  );
}

export default GoTop;
