import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const ModalBox = styled.div`
  width: 700px;
  background-color: white;
  z-index: 100;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background-color: #8e0e28;
  margin-bottom: 40px;

  & > p {
    font-size: 26px;
    color: white;
    margin: 0;
  }

  & > .cancelIcon {
    font-size: 50px;
    color: white;
    opacity: 0.5;
  }

  @media all and (max-width: 768px) {
    & > p {
      font-size: 20px;
    }
  }
`;

export const Form = styled.form`
  font-size: 16px;
  color: #939393;
  margin: 0 50px;
`;

export const P = styled.p`
  display: inline-flex;
  justify-content: space-between;
  width: 280px;
  margin: 0 0 20px 0;

  &:first-child {
    width: 100%;

    :nth-child(2) {
      width: 510px;
    }
  }

  &:nth-child(2n) {
    margin-right: 40px;
  }

  &:last-of-type {
    display: flex;
    width: 600px;

    :nth-child(2) {
      width: 510px;
      font-size: 15px;
      border: 1px solid #e5e4e4;
      border-radius: 3px;
      padding: 10px 15px;
    }
  }
`;

export const Label = styled.label`
  display: inline-block;
  width: 90px;
  white-space: nowrap;
  line-height: 30px;
`;

export const Input = styled.input`
  width: 190px;
  height: 30px;
  border: 1px solid #e5e4e4;
  font-size: 15px;
  border-radius: 3px;
  padding: 0 0 0 15px;

  ${P}:nth-child(3) > & {
    box-sizing: border-box;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 190px;

  & > Input {
    width: calc(100% - 55px);
    padding: 0 40px 0 15px;
  }
`;

export const CurrencyText = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 15px;
  display: flex;
  height: 30px;
  align-items: center;
  color: #b9b9b9;
  pointer-events: none;
`;
