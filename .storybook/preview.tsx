import React from "react";
import { ThemeProvider } from 'styled-components';
import { Story, StoryContext } from '@storybook/react/types-6-0';

import GlobalStyles from "../src/Renderer/constants/GlobalStyle";
import defaultTheme from "../src/Renderer/constants/theme/defaultTheme";

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#e9e2dc'
      },
      {
        name: 'login',
        value: '#00544f'
      },
    ],
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      items: ['default'],
    },
  },
};
const withThemeProvider = (StoryComp: Story, context: StoryContext) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <StoryComp {...context} />
  </ThemeProvider>
)

export const decorators = [ withThemeProvider ];
