import { Link } from "react-router-dom";
import Button from "../../../components/ui/button/Button";
import {
  StyledPayment,
  StyledPaymentcontainer,
  StyledAction,
  StyledPaymentActionBox,
  StyledPaymentBox,
  StyledInfoBox,
  StyledInfoContainer,
  StyledActionBg,
} from "./PaymentDone.style";

import OderList from "../oderList/OderList";

const PaymentDone = () => {
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
            <StyledActionBg>
              <span>STEP2</span>
              <b>결제완료</b>
            </StyledActionBg>
          </StyledAction>
        </StyledPaymentActionBox>
        <StyledPayment>
          <StyledInfoContainer>
            <StyledInfoBox>
              <OderList />
            </StyledInfoBox>
            <Link to="/">
              <Button text={"홈으로"} type={"grey"} />
            </Link>
            <Link to="/Cart">
              <Button text={"마이페이지"} type={"red"} />
            </Link>
          </StyledInfoContainer>
        </StyledPayment>
      </StyledPaymentBox>
    </StyledPaymentcontainer>
  );
};

export default PaymentDone;
