import styled from "styled-components";

export const Bottom = styled.div``;
export const BottomBox = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  > div > b {
    font-size: 20px;
  }
  > div > p {
    font-size: 17px;
  }
  @media (max-width: 768px) {
    padding: 5px;
    font-size: smaller;
  }
`;
export const BottomSlide = styled.div`
  .slick-slider {
    overflow-x: hidden;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  // 네비게이션 버튼 숨김
  .slick-prev,
  .slick-next {
    display: none;
  }

  .slick-track {
    display: flex;
    justify-content: space-between;
    width: 480px;
  }

  .slick-track > div {
    box-sizing: border-box;
    height: autopx;
    border-radius: 10px;
    background-color: #8e0e28;
    word-wrap: break-word;
    overflow-wrap: break-word;
    color: white;
    cursor: pointer;
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
  .slick-track > div > div {
    display: block;
    padding: 20px;
  }
  .slick-track > div > div > div {
    display: block;
  }
`;

export const SquareButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SquareButton = styled.div`
  margin-right: 10px;
  padding: 10px 0;
  background-color: ${(props) => props.bgColor};
  > Button {
    font-size: 14px;
  }
`;
export const BsChat = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
  > span {
    padding-left: 10px;
  }
`;
