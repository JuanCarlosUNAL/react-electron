import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Button from '.';
import { Props } from './types';

// This default export determines where you story goes in the story list
export default {
  title: 'Common Components/Button',
  component: Button,
  parameters: {
    background: {default: 'login'},
  },
  argTypes: {
    disabled: {control: 'boolean'},
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args}>Button</Button>;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
