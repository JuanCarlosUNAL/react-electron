import React from 'react';

import Routes from './Routes';
import GlobalStyle from './constants/GlobalStyle';

const Renderer: React.FC = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);

export default Renderer;
