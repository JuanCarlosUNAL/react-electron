import React from 'react';

import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import { initializeApp as initializeFirebase } from 'firebase';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import firebaseCredentials from './constants/firebaseCredentials.json';
import defaultTheme from './constants/theme/defaultTheme';
import GlobalStyle from './constants/GlobalStyle';
import FirebaseProvider from './Providers/FirebaseProvider';

dayjs.extend(duration);

const Renderer: React.FC = () => {
  initializeFirebase(firebaseCredentials);
  return (
    <ThemeProvider theme={defaultTheme}>
      <FirebaseProvider>
        <GlobalStyle />
        <Routes />
      </FirebaseProvider>
    </ThemeProvider>
  );
};

export default Renderer;
