import styled from "styled-components";

export const StyledPaymentcontainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background-color: #8e0e28;
  overflow: auto;
`;

export const StyledPaymentBox = styled.div`
  margin-top: 100px;
`;

export const StyledPaymentActionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  > span {
    width: 100px;
    height: 95px;
    line-height: 50%;
    text-align: center;
    font-size: 5em;
    color: white;
  }
`;

export const StyledAction = styled.div`
  width: 150px;
  height: 95px;
  border: none;
  border-top-right-radius: 20px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  > div {
    display: flex;
    flex-direction: column;
  }
  > div > b {
    font-size: 23px;
  }
`;

export const StyledPayment = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: auto;
  background-color: #f5f5f5;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px 0px 30px 0px;
`;
export const StyledInfo = styled.div`
  width: 925px;
  height: 100px;
  border: 1px solid #878585;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const StyledInfoContainer = styled.div`
  margin: 50px;
`;

export const StyledInfoBox = styled.div`
  text-align: start;
  margin: 50px;
`;
export const StyledInputBox = styled.div`
  width: 850px;
  display: flex;
  > h3 {
    padding-right: 150px;
  }
  > input {
    display: flex;
    flex: 1;
    border: none;
    outline: none;
    padding-left: 20px;
    background-color: #f5f5f5;
  }
`;
export const StyledOrderList = styled.div`
  padding-top: 30px;
  > i {
    display: block;
    width: 100%;

    border: 2px solid #8e0e28;
  }
`;
export const StyledOrderListMenu = styled.div`
  > i {
    display: block;
    width: 100%;
    border: 1px solid #8e0e28;
  }
`;
export const StyledOrderListMenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    > b {
      padding-bottom: 10px;
      font-size: 20px;
    }
  }
  > div:nth-child(2) {
    font-size: 20px;
    font-weight: 600;
  }
  > div:nth-child(3) {
    font-size: 20px;
    font-weight: 600;
  }
`;
export const StyledAmountPayment = styled.div`
  padding-top: 30px;

  > div {
    display: flex;
    justify-content: space-between;
  }
  > i {
    display: block;
    width: 100%;

    border: 2px solid #8e0e28;
  }
`;

// 영준님
export const InputBox = styled.div`
  width: 900px;
  height: 100px;

  border: 1px solid #878585;

  margin: 4px;

  display: flex;
  flex-direction: column;

  align-content: space-between;
  justify-content: space-between;
  align-items: left;
  text-align: center;

  padding-left: 12px;
  padding-right: 12px;
`;
export const BtnConfirm = styled.button`
  width: 123px;
  height: 42px;

  border-radius: 20px;
  background: #650818;

  color: #ffffff;

  margin: 4px;

  border: none;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;

  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;

  flex: 1;
`;
