import styled from "styled-components";

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
  padding-bottom: 30px;

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
