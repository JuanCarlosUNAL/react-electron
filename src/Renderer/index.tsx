import React from 'react';

import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import { initializeApp as initializeFirebase } from 'firebase';

import firebaseCredentials from './constants/firebaseCredentials.json';
import defaultTheme from './constants/theme/defaultTheme';
import GlobalStyle from './constants/GlobalStyle';

const Renderer: React.FC = () => {
  initializeFirebase(firebaseCredentials);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default Renderer;
