import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import StyledButton, {
  AnimatedDiv,
  DarkButton,
  FancyButton,
  SubmitButton,
} from "./Button.styles";

const theme={
  dark:{
    primary: "#252525",
    text: "#f5f5f5",
  },
  light:{
    primary: "#f5f5f5",
    text: "#252525",
  }
}


const GlobalStyle = createGlobalStyle`
  button{
    font-family: 'Times New Roman', Times, serif
  }
`



const StyledComponents = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <div>StyledComponents</div>
        <StyledButton type="submit">Styled Button</StyledButton>
        <div>
          <hr />
        </div>

        {/* passing props  */}
        <StyledButton variant="outline">Styled Button</StyledButton>

        {/* extended style  */}
        {/* styledcomponent provides poymorphic prop with as attribute. */}
        <FancyButton as="a">Fancy Button</FancyButton>

        <SubmitButton>Submit Buton</SubmitButton>

        {/* animation */}
        <AnimatedDiv />

        {/* theme  */}
        <DarkButton>Dark Theme</DarkButton>
      </div>
    </ThemeProvider>
  );
};

export default StyledComponents;
