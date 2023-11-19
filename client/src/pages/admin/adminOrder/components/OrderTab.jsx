import styled, { css } from "styled-components";

const tabs = ["접수 대기", "완료"];

const OrderTab = ({ currTab, onClick }) => {
  return (
    <Container>
      {tabs.map((tab, i) => {
        return (
          <EactTab key={`${tab}-${i}`} active={currTab === tab} onClick={() => onClick(tab)}>
            {tab}
          </EactTab>
        );
      })}
    </Container>
  );
};

OrderTab.defaultProps = {
  currTab: "접수 대기",
  onClick: () => {},
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  background-color: white;
`;

const EactTab = styled.p`
  font-size: 16px;
  color: #151618;
  margin: 20px 20px 0;
  padding-bottom: 20px;

  ${(props) =>
    props.active &&
    css`
      color: #8e0e28;
      font-weight: bold;
      background: rgba(230, 230, 230, 0.0001);
      box-shadow: inset 0px -4px 0px #8e0e28;
    `}
`;

export default OrderTab;
