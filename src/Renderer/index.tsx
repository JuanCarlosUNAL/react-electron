import React from 'react';

import Routes from './Routes';
import GlobalStyle from './constants/GlobalStyle';
import { initializeApp as initializeFirebase } from 'firebase';

import firebaseCredentials from './constants/firebaseCredentials.json';

const Renderer: React.FC = () => {
  initializeFirebase(firebaseCredentials);
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default Renderer;
