import Button from "../../components/ui/button/Button";
import Card from "../../components/ui/card/Card";
import { StyledOrder, StyledCategory, CategoryButton } from "./Order.style";
import mockupData from "../../components/ui/data/mockupdata.json";

const Order = () => {
  // 목업 가져오기
  const cards = mockupData.products.map((product, id) => (
    <Card key={id} data={product} />
  ));

  // 카테고리 리스트 배열
  const categories = [
    "전체",
    "에스프레소",
    "논커피",
    "스무디",
    "티",
    "에이드",
    "즐겨찾기",
  ];

  return (
    <StyledOrder>
      <StyledCategory>
        {categories.map((category, index) => (
          <CategoryButton key={index}>{category}</CategoryButton>
        ))}
      </StyledCategory>
      <div className="cards-container">{cards}</div>
      <div className="buttons-container">
        <Button
          type="grey"
          text={"장바구니"}
          onClick={() => {
            alert("장바구니로 이동하시겠습니까?");
          }}
        />
        <Button
          type="red"
          text={"결제하기"}
          onClick={() => {
            alert("주문하시겠습니까?");
          }}
        />
      </div>
    </StyledOrder>
  );
};
export default Order;
