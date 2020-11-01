import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import FormTimerModal from '.';
import { Props } from './types';

// This default export determines where you story goes in the story list
export default {
  title: 'Screens / New Timer',
  component: FormTimerModal,
  argTypes: {
    onCloseModal: { action: 'close modal' },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <FormTimerModal {...args}/>
);

export const Default = Template.bind({});
