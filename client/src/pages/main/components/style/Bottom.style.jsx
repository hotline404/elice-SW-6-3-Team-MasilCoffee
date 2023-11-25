import styled from "styled-components";

export const BottomSlide = styled.div`
  width: 100%;
  background-color: ${(props) => props.$bgColor || "defaultColor"};

  .slick-slider {
    overflow-x: hidden;
  }

  .slick-track {
  }

  .slick-track > div {
    box-sizing: border-box;
    height: auto;
    word-wrap: break-word;
    overflow-wrap: break-word;
    color: white;
    cursor: pointer;
  }
  .slick-track > div > div {
    display: block;
  }
  .slick-track > div > div > div {
    display: block;
  }
`;

export const Bottom = styled.div`
  width: 400px;
  @media (max-width: 768px) {
    width: 100%; // 화면이 작을 때 너비 조절
  }
`;
export const BottomBox = styled.div`
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 30px;
  border-radius: 20px;
  margin: 40px 0;
  @media (max-width: 768px) {
    width: 100%; // 화면이 작을 때 너비 조절
  }

  background-color: ${(props) => props.$bgColor || "defaultColor"};
  color: ${(props) => (props.$bgColor === "#d9d9d9" ? "black" : "white")};
  border: ${(props) => (props.isEven ? "1px solid #191414" : "none")};
`;

export const SquareButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SquareButton = styled.div`
  margin-right: 10px;
  /* padding: 10px 0; */
  background-color: ${(props) => props.$bgColor || "defaultColor"};
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
