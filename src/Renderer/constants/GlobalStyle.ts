import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html div, body, p, h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
    user-select: none;
  }
  .full-container {
    width: 100vw;
    height: 100vh;
  }
  .selectable {
    user-select: text;
  }
`;

export default GlobalStyle;
