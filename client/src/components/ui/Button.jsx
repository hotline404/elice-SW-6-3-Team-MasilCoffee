import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  padding: 15px 30px;
  font-size: 15px;

  &.Button_grey {
    background-color: #ececec;
    color: #8e0e28;
  }
  &.Button_red {
    background-color: #8e0e28;
    color: white;
  }
`;

const Button = ({ text, type, onClick }) => {
  const btnType = ["grey", "red"].includes(type) ? type : "grey";
  return (
    <StyledButton
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "grey",
};

export default Button;
