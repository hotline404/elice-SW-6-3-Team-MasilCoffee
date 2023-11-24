import { useDispatch, useSelector } from "react-redux";

import {
    StyledOrderList,
    StyledOrderListMenu,
    StyledOrderListMenuBox,
    StyledAmountPayment,

  } from "./OderList.style";


function OderList() {
    const orders = useSelector((state) => state.payment); // []
    return ( <>
              <StyledOrderList>
                <h2>주문내역</h2>
                <i></i>
                <StyledOrderListMenu>
                  {orders.length > 0 &&
                    orders.map((order) => (
                      <>
                        <StyledOrderListMenuBox>
                          <div>
                            <b>{order.name}</b>
                            <span>{`샷 : ${order.shot}`}</span>
                            <span>{`시럽 : 바닐라 ${order.syrups.vanilla} 헤이즐넛 ${order.syrups.hazelnut} 카라멜  ${order.syrups.caramel} `}</span>
                            <span>{`얼음 : ${order.ice}`}</span>
                            <span>{`휘핑 : ${order.whipping}`}</span>
                            <span>{`드리즐 : ${order.drizzle}`}</span>
                            <span>{`우유 : ${order.milk}`}</span>
                          </div>
                          <div>{order.menu}</div>
                          <div>{order.totalPrice}원</div>
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
                    {orders.length > 0
                      ? orders
                          .reduce((acc, order) => acc + order.totalPrice, 0)
                          .toLocaleString()
                      : 0}
                    원
                  </h2>
                </div>
                <i></i>
              </StyledAmountPayment>
              
    </> );
}

export default OderList;