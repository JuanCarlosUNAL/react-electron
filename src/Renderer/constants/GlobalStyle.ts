import { createGlobalStyle } from 'styled-components';
import * as Roboto from '../assets/fonts/Roboto';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: roboto;
    src: ${Roboto.regular};
  }

  html div, body, p, h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
    user-select: none;
    font-family: roboto;
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
