import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Button from '../Button';

import ButtonGroup from '.';
import { Props } from './types';
import { ButtonTypes } from '../Button/types';

// This default export determines where you story goes in the story list
export default {
  title: 'Common Components/Button Group',
  component: ButtonGroup,
  parameters: {
    background: {default: 'login'},
  },
} as Meta;

const Template: Story<Props> = (args) => <ButtonGroup {...args}>
  <Button disabled >One</Button>
  <Button>Two</Button>
  <Button disabled >Three</Button>
  <Button type={ButtonTypes.error}>Three</Button>
</ButtonGroup>;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
};
