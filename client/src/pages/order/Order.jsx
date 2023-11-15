import Button from "../../components/ui/button/Button";
import Card from "../../components/ui/card/Card";

const Order = () => {
  return (
    <div>
      <Card />
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
          alert("결제하기로 이동하시겠습니까?");
        }}
      />
    </div>
  );
};
export default Order;
