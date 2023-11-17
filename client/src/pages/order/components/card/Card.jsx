import React, { useState } from "react";
import Button from "../../../../components/ui/button/Button";
import { StyledCard, StyledText, StyledButtonText } from "./Card.style";

const Card = ({ data }) => {
  // 카드 클릭 시 추천 꿀 조합 텍스트와 주문하기 버튼 나옴
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => {
    setClickMenu(!clickMenu);
  };

  return (
    <div className="card">
      <StyledCard onClick={handleClickMenu} clickMenu={clickMenu}>
        {clickMenu && (
          <StyledButtonText>
            <b>{data.honeyTip.title}</b>
            <p>{data.honeyTip.description}</p>
            <Button
              type="white"
              text={"주문하기"}
              onClick={() => {
                alert("주문 하시겠습니까?");
              }}
            />
          </StyledButtonText>
        )}
      </StyledCard>
      <StyledText>
        <b>{data.name}</b>
        <p>{data.description}</p>
        <p>칼로리 : {data.calories}</p>
      </StyledText>
    </div>
  );
};

export default Card;
