import { useState, useEffect } from "react";
import { StyledOrderListMenuBox, StyledOrderListMenu } from "./OrderList.style";

import { useDispatch, useSelector } from "react-redux";
import * as orderOptionAction from "../../redux/action/orderOptionAction";
import { updateOrder } from "../../redux/action/orderAction";
import { addOrder } from "../../redux/action/orderAction";

const OrderList = ({ handleOnSelect, checkedStates }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order);
  const pruducts = useSelector((state) => state.product.products);
  //   const [totalPrice, setTotalPrice] = useState();

  const handleQuantity = (order, operator) => {
    if (operator === "+") {
      dispatch(updateOrder({ ...order, menu: order.menu + 1 }, order.id));
    } else if (operator === "-" && order.menu > 1) {
      dispatch(updateOrder({ ...order, menu: order.menu - 1 }, order.id));
    }
  };

  return (
    <StyledOrderListMenu>
      {orders.length > 0 &&
        orders.map((order) => (
          <StyledOrderListMenuBox key={order.orderId}>
            <div>
              <div>
                <input
                  onClick={() => handleOnSelect(order)}
                  checked={checkedStates[order.orderId]}
                  type="checkbox"
                />
                <b>{order.name}</b>
              </div>
              <span>{`샷 : ${order.shot}`}</span>
              {order.shot.map(item => (<span>`샷 : ${item.name} ${item.quantity}`</span>))}
              <span>{`시럽 : 바닐라 ${order.syrups.vanilla} 헤이즐넛 ${order.syrups.hazelnut} 카라멜  ${order.syrups.caramel} `}</span>
              <span>{`얼음 : ${order.ice}`}</span>
              <span>{`휘핑 : ${order.whipping}`}</span>
              <span>{`드리즐 : ${order.drizzle}`}</span>
              <span>{`우유 : ${order.milk}`}</span>
              <div>
                <b>수량</b>
                <button onClick={() => handleQuantity(order, "-")}>-</button>
                <span>{order.menu}</span>
                <button onClick={() => handleQuantity(order, "+")}>+</button>
                <b>총 주문금액</b>
                <b>{order.totalPrice}원</b>
              </div>
            </div>
            <div>이미지</div>
          </StyledOrderListMenuBox>
        ))}
    </StyledOrderListMenu>
  );
};

export default OrderList;
