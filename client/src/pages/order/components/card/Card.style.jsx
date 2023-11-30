import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 300px;
  height: 400px;
  cursor: pointer;
  border: 1px solid #878585;
  background-color: ${({ $clickMenu }) =>
    $clickMenu ? "rgba(142,14,40,0.7)" : "initial"};
  color: #f5f5f5;
`;

export const StyledImage = styled.img`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: opacity 0.3s ease, z-index 0.3s ease;
  opacity: ${({ $clickMenu }) =>
    $clickMenu ? 0.3 : 1}; // $clickMenu 상태에 따라 투명도 변경
  z-index: ${({ $clickMenu }) =>
    $clickMenu ? -1 : 0}; // $clickMenu 상태에 따라 z-index 변경
`;
export const StyledText = styled.div`
  max-width: 300px;
  margin: 0 auto;

  b {
    font-size: 20px;
    font-weight: 900;
  }
  p {
    font-size: 12px;
  }
`;
export const StyledButtonText = styled.div`
  margin: 0 auto;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  div > b {
    font-size: 16px;
    font-weight: 900;
  }
  div > p {
    font-size: 14px;
  }
  button {
    display: block;
  }
`;

// // 이미지에 적용할 스타일 정의
// export const StyledImage = styled.img`
//   object-fit: cover;
//   overflow: hidden;
//   width: 300px;
//   height: 400px;
//   position: absolute;
//   top: 0;
//   z
// `;
