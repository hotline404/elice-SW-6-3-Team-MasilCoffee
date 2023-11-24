import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import SquareButton from "../../components/ui/button/SquareButton";
import {
  StyledPayment,
  StyledPaymentcontainer,
  StyledAction,
  StyledPaymentActionBox,
  StyledPaymentBox,
  StyledInfoBox,
  StyledInfo,
  StyledInputBox,
  StyledOrderList,
  StyledOrderListMenu,
  StyledOrderListMenuBox,
  StyledAmountPayment,
  StyledInfoContainer,
  StyledActionBg,
} from "./Payment.style";

import { useSelector } from "react-redux";

import OderList from "./oderList/OderList";

const Payment = () => {
  const navigate = useNavigate();
  
  return (
    <StyledPaymentcontainer>
      <StyledPaymentBox>
        <StyledPaymentActionBox>
          <StyledAction>
            <StyledActionBg>
              <span>STEP1</span>
              <b>주문결제</b>
            </StyledActionBg>
          </StyledAction>
          <span>.....</span>
          <StyledAction>
            <div>
              <span>STEP2</span>
              <b>결제완료</b>
            </div>
          </StyledAction>
        </StyledPaymentActionBox>
        <StyledPayment>
          <StyledInfoContainer>
            <StyledInfoBox>
              <h2>주문자 정보</h2>
              <StyledInfo>
                <StyledInputBox>
                  <h3>수령인</h3>
                  <input type="text" placeholder="김다빈" />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>수령방법</h3>
                  <SquareButton text={"방문포장"} type={"red"} />
                  <SquareButton text={"매장식사"} type={"grey"} />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>전화번호</h3>
                  <input type="text" placeholder="010 - 0000 - 0000" />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>주문 요청사항</h3>
                  <input
                    type="text"
                    placeholder="주문 시 요청사항을 입력하세요"
                  />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>결제수단</h3>
                  <SquareButton text={"신용카드"} type={"red"} />
                </StyledInputBox>
              </StyledInfo>
            </StyledInfoBox>
            <StyledInfoBox>
              <OderList />
            </StyledInfoBox>
            <Button
              onClick={() => navigate("/PaymentDone")}
              text={"결제하기"}
              type={"red"}
            />
          </StyledInfoContainer>
        </StyledPayment>
      </StyledPaymentBox>
    </StyledPaymentcontainer>
  );
};

export default Payment;
