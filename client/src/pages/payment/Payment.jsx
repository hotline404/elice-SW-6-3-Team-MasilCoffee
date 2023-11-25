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
  StyledInfoContainer,
  StyledActionBg,
} from "./Payment.style";

import { useSelector } from "react-redux";

import OderList from "./oderList/OderList";

const Payment = () => {
  const name = useSelector((state) => state.user.name);
  const phone = useSelector((state) => state.user.phone);

  const navigate = useNavigate();
  const handleOnClickToPayment = () => {
    // confirm 대화상자를 표시하고, 사용자의 응답을 확인
    const isConfirmed = window.confirm("정말 결제 하시겠습니까?");

    // 사용자가 '확인'을 누른 경우, PaymentDone 페이지로 이동
    if (isConfirmed) {
      navigate("/PaymentDone");
    }
  };

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
                  <input type="text" value={name} readOnly="readOnly" />
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
                  <input type="text" value={phone} readOnly="readOnly" />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>주문 요청사항</h3>
                  <input
                    type="text"
                    placeholder="주문 시 요청사항을 입력하세요"
                  />
                  <SquareButton text={"확인"} type={"red"} />
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
              onClick={handleOnClickToPayment}
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
