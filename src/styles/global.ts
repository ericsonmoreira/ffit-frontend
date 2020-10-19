import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: #121212;
    background: #EBF2F5;
  }
  body, input, button, textarea {
    font: 600 18px 'Nunito', sans-serif;
  }
`;
