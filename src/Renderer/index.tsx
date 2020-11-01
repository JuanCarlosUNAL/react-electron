import React from 'react';

import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import { initializeApp as initializeFirebase } from 'firebase';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import firebaseCredentials from './constants/firebaseCredentials.json';
import defaultTheme from './constants/theme/defaultTheme';
import GlobalStyle from './constants/GlobalStyle';

dayjs.extend(duration);

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
