import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import {default as LoginLogup} from '.';
import { LoginOptions, Props } from './types';

// This default export determines where you story goes in the story list
export default {
  title: 'Screens/LoginLogup',
  component: LoginLogup,
  argTypes: {
    disabled: {control: 'boolean'},
    onLogup: { action: 'onLogup' },
    onLogin: { action: 'onLogin' },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <LoginLogup {...args}/>
);

export const Default = Template.bind({});

export const LogupState = Template.bind({});
LogupState.args = {
  initTab: LoginOptions.LOGUP,
};

export const WithError = Template.bind({});
WithError.args = {
  errorMessage: 'this is an short error message',
};

