import React, { useState } from "react";
import * as Orders from "./Style_OrderDetail";

const OrderCancel = () => {
  const [selectedReason, setSelectedReason] = useState("");
  const cancelReasons = ["고객 요청", "재료 소진", "가게 사정"];

  const handleClick = (reason) => {
    setSelectedReason(reason);
  };

  return (
    <Orders.ModalBackground>
      <Orders.ModalBox>
        <Orders.Title>
          <div>주문취소</div>
          <p>X</p>
        </Orders.Title>
        <Orders.SubTitle>주문 취소 사유를 선택하세요.</Orders.SubTitle>
        <Orders.ReasonWrapper>
          {cancelReasons.map((reason, i) => {
            return (
              <Orders.Reason key={reason + i} className={selectedReason === reason ? "clicked" : ""} onClick={() => handleClick(reason)}>
                {reason}
              </Orders.Reason>
            );
          })}
        </Orders.ReasonWrapper>
        <Orders.CompleteButton onClick={() => console.log(selectedReason)}>취소 완료</Orders.CompleteButton>
      </Orders.ModalBox>
    </Orders.ModalBackground>
  );
};

export default OrderCancel;
