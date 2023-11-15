import styled, { css } from "styled-components";

const tabs = ["접수 대기", "완료"];

const AdminTab = ({ currTab, onClick }) => {
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

AdminTab.defaultProps = {
  currTab: "접수 대기",
  onClick: () => {},
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  margin: 70px 70px 15px;
  background-color: white;
`;

const EactTab = styled.p`
  font-size: 14px;
  color: #151618;
  margin: 23px 20px;

  ${(props) =>
    props.active &&
    css`
      color: #8e0e28;
      font-weight: bold;
      background: rgba(230, 230, 230, 0.0001);
      box-shadow: inset 0px -4px 0px #8e0e28;
    `}
`;

export default AdminTab;
