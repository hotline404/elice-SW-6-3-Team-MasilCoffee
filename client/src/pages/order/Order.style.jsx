import styled from "styled-components";

export const StyledOrder = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .card {
    width: calc(33% - 10px);
    margin-bottom: 20px;
  }

  /* 모바일 환경을 위한 미디어 쿼리 */
  @media (max-width: 768px) {
    .card {
      width: calc(50% - 10px);
    }
  }
  /* 탭을 위한 미디어 쿼리 */
  @media (max-width: 480px) {
    .card {
      width: 100%;
    }
  }
  /* 데스크톱 환경을 위한 미디어 쿼리 */
  @media (min-width: 1920px) {
    .card {
      width: calc(33.33% - 10px); //
    }
  }
`;

export const StyledCategory = styled.button``;
export const CategoryButton = styled.div`
  font-size: 15px;
  border: 1px solid #878585;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0; // 마우스 오버 시 배경색 변경
  }
`;
