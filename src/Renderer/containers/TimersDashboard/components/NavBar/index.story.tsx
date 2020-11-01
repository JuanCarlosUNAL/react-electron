import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import NavBar from '.';
import { Props } from './types';

// This default export determines where you story goes in the story list
export default {
  title: 'Screens / Time Cards / NavBar',
  component: NavBar,
} as Meta;

const Template: Story<Props> = (args) => (
  <NavBar {...args}/>
);

export const Default = Template.bind({});
Default.args = {
};
