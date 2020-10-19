import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: ${colors.primary};
    background: ${colors.bgColor};
  }
  body, input, button, textarea {
    font: 600 18px 'Nunito', sans-serif;
  }
`;
