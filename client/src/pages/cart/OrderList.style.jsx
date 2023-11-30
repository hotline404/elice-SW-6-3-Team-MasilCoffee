import styled from "styled-components";

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

export const StyledOrderOptionBox = styled.div`
  > div {
    padding: 10px 0;
  }
`;
export const StyledOrdeName = styled.div`
  > b {
    font-size: 24px;
  }
`;
export const StyledOrderText = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  > span {
    padding-left: 18px;
    font-weight: bold;
    color: #8e0e28;
    font-size: 20px;
  }
  > div {
    display: flex;
    align-items: center;
    padding-right: 20px;

    > button {
      width: 30px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
    }
    > b {
      font-size: 18px;
    }
  }

  > b {
    font-size: 18px;
  }
`;
export const StyledOrderOption = styled.div`
  display: flex;
  font-size: 18px;
  > span {
    padding-right: 10px;
    color: #878585;
    font-weight: bold;
  }
`;
export const StyledImg = styled.img`
  width: 255px;
  height: 255px;
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 40px;
  cursor: pointer;
  padding: 0;
`;
