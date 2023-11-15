import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 88px;
  background-color: #f9f9f9;
`;

export const Content = styled.div`
  flex: 1;
  margin: 70px 70px;
`;

export const OrderBox = styled.div`
  width: 100%;
  margin-bottom: 15px;
  background-color: white;
`;

export const TopBox = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #f4dfdf;
`;

export const Date = styled.div`
  margin: 20px 0 20px 40px;
  font-size: 18px;
  font-weight: 600;
`;

export const Time = styled.div`
  margin: 20px 0 20px 8px;
  font-size: 28px;
  font-weight: 700;
  line-height: 20px;
`;

export const Orderer = styled.div`
  margin: 20px 0 20px 8.5%;
  font-size: 16px;
  font-weight: 700;
`;

export const Request = styled.div`
  margin: 20px 0 20px 30px;
  font-size: 16px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const LeftBox = styled.div`
  width: 18%;
  border-right: solid 2px #ededed;
`;

export const TotalPrice = styled.div`
  margin-top: 50px;
  margin-bottom: 17px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const Takeout = styled.div`
  width: 60%;
  height: 37px;
  margin: 0 auto;
  font-size: 16px;
  text-align: center;
  line-height: 37px;
  background-color: #ededed;
`;

export const CenterBox = styled.div`
  width: 58%;
`;

export const ItemBox = styled.div`
  margin: 18px 0 25px 8%;
`;

export const Item = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ItemOption = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  color: #8a8a8a;
`;

export const RightBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px 0;
`;

export const CancelButton = styled.div`
  width: 120px;
  height: 132px;

  border: solid 2px #e1e1e1;
  font-size: 18px;
  font-weight: bold;
  line-height: 132px;
  text-align: center;
`;

export const AcceptButton = styled.div`
  width: 120px;
  height: 132px;
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 132px;
  text-align: center;

  &.accepted {
    color: #474747;
    border: solid 2px #ea1d47;
  }

  &.not-accepted {
    color: white;
    background-color: #ea1d47;
  }
`;
