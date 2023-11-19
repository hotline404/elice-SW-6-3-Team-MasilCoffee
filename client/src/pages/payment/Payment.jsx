import Button from "../../components/ui/button/Button";
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
  StyledInfoContainer
} from "./Payment.style";

const Payment = () => {
  return (
    <StyledPaymentcontainer>
      <StyledPaymentBox>
        <StyledPaymentActionBox>
          <StyledAction>
            <div>
              <span>STEP1</span>
              <b>주문결제</b>
            </div>
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
                  <Button text={"방문포장"} type={"red"} />
                  <Button text={"매장식사"} type={"grey"} />
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
              <StyledOrderList>
                <h2>주문내역</h2>
                <i></i>
                <StyledOrderListMenu>
                  <StyledOrderListMenuBox>
                    <div>
                      <b>에스프레소</b>
                      <span>샷1</span>
                    </div>
                    <div>2잔</div>
                    <div>9,000원</div>
                  </StyledOrderListMenuBox>
                  <i></i>
                </StyledOrderListMenu>
              </StyledOrderList>
              <StyledAmountPayment>
                <div>
                  <h2>총 결제 금액</h2>
                  <h2>9,000원</h2>
                </div>

                <i></i>
              </StyledAmountPayment>
            </StyledInfoBox>
            <Button text={"결제하기"} type={"red"} />
          </StyledInfoContainer>
        </StyledPayment>
      </StyledPaymentBox>
    </StyledPaymentcontainer>
  );
};

export default Payment;
