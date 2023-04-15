import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
  border: solid 2px #4caf50;
  background: ${(props) =>
    props.variant === "outline" ? "transparent" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "white")};
  padding: 10px 20px;
  margin: 15px 0;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.5s all ease-in-out;

  // pseudo class
  &:hover {
    font-size: 1.4rem;
  }
`;

// extended style
export const FancyButton = styled(StyledButton)`
  border-radius: 10px 20px;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  background: #252525;
  color: #f1f1f1;
  border: none;
`;

const rotate = keyframes`
from{
  transform: rotate(0deg)
}
to{
  transform: rotate(360deg)
}
`;

export const AnimatedDiv = styled.div`
  height: 100px;
  width: 100px;
  background: #4caf50;
  margin: 5px auto;
  border-radius: 50%;
  box-shadow: inset 5px 2px 5px #f5f5f5;
  animation: ${rotate} infinite 8s linear;
`;

// theme
export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;

export default StyledButton;
