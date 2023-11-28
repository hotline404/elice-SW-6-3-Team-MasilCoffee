import SquareButton from "../../../components/ui/button/SquareButton";
import { useSelector } from "react-redux";
import {
  StyledOrderList,
  StyledOrderListMenu,
  StyledOrderListMenuBox,
  StyledAmountPayment,
  StyledOrderListMenuText,
  StyledOrderListMednuRequest,
} from "./OderList.style";

function OderList() {
  const payment = useSelector((state) => state.payment); // []

  return (
    <>
      <StyledOrderList>
        <h2>주문내역</h2>
        <i></i>
        <StyledOrderListMenu>
          {payment.orders.length > 0 &&
            payment.orders.map((order) => (
              <>
                <StyledOrderListMenuBox>
                  <div>
                    <b>{order.name}</b>
                    <StyledOrderListMenuText>
                      {order.shot
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <span
                            key={item.name}
                          >{`샷 : ${item.name} ${item.quantity}`}</span>
                        ))}
                      {order.syrups
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <span
                            key={item.name}
                          >{`시럽 : ${item.name} ${item.quantity}`}</span>
                        ))}
                      {order.whipping
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <span
                            key={item.name}
                          >{`휘핑 : ${item.name}`}</span>
                        ))}
                      {order.ice
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <span
                            key={item.name}
                          >{`얼음 : ${item.name}`}</span>
                        ))}
                      {order.drizzle
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <span
                            key={item.name}
                          >{`드리즐 : ${item.name}`}</span>
                        ))}
                      {order.milk
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <span
                            key={item.name}
                          >{`우유 : ${item.name}`}</span>
                        ))}
                    </StyledOrderListMenuText>
                    {/* <StyledOrderListMenuText>
                      <span>{`샷 : ${order.shot}`}</span>
                      <span>{`시럽 : 바닐라 ${order.syrups.vanilla} 헤이즐넛 ${order.syrups.hazelnut} 카라멜  ${order.syrups.caramel} `}</span>
                    </StyledOrderListMenuText> */}
                    {/* <StyledOrderListMenuText>
                      <span>{`얼음 : ${order.ice}`}</span>
                      <span>{`휘핑 : ${order.whipping}`}</span>
                      <span>{`드리즐 : ${order.drizzle}`}</span>
                      <span>{`우유 : ${order.milk}`}</span>
                    </StyledOrderListMenuText> */}
                  </div>
                  <div>{order.quantity}개</div>
                  <div>{order.totalPrice}원</div>
                  <SquareButton text={"선택삭제"} type={"grey"} />
                </StyledOrderListMenuBox>
                <i></i>
                <StyledOrderListMenuBox>
                  <StyledOrderListMednuRequest>
                    주문 요청사항 : {payment.orderRequest}
                  </StyledOrderListMednuRequest>
                </StyledOrderListMenuBox>

                <i></i>
                <StyledOrderListMenuBox>
                  <StyledOrderListMednuRequest>
                    수령방법 : {payment.deliveryMethod}
                  </StyledOrderListMednuRequest>
                </StyledOrderListMenuBox>

                <i></i>
              </>
            ))}
        </StyledOrderListMenu>
      </StyledOrderList>
      <StyledAmountPayment>
        <div>
          <h2>총 결제 금액</h2>
          <h2>
            {payment.orders.length > 0
              ? payment.orders
                  .reduce((acc, order) => acc + order.totalPrice, 0)
                  .toLocaleString()
              : 0}
            원
          </h2>
        </div>
        <i></i>
      </StyledAmountPayment>
    </>
  );
}

export default OderList;
