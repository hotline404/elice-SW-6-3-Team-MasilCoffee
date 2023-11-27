import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 0 auto;
  max-width: 300px;
  height: 400px;
  cursor: pointer;
  border: 1px solid #878585;
  background-color: ${({ $clickMenu }) =>
    $clickMenu ? "rgba(142,14,40,0.7)" : "initial"};
  color: #f5f5f5;
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
