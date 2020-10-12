import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';

import defaultTheme from '../constants/theme/defaultTheme';

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui: React.ReactElement) =>
  render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
