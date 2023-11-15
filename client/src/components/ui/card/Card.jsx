import { StyledCard, StyledText } from "./Card.style";

const Card = () => {
  return (
    <div className="card">
      <StyledCard>이미지</StyledCard>
      <StyledText>
        <b>에스프레소</b>
        <p>
          에스프레소에 물을 넣어 연하게 마시는 커피 메뉴로 커피 본연의 맛을
          부드럽게 즐길 수 있는 대표 메뉴 입니다.
        </p>
        <p>칼로리 : 5kcal</p>
      </StyledText>
    </div>
  );
};

export default Card;
