import React from 'react';
import dayjs from 'dayjs';
import { Meta, Story } from '@storybook/react/types-6-0';

import TimeCard from '.';
import { Props } from './types';

// This default export determines where you story goes in the story list
export default {
  title: 'Screens / Time Cards / Card',
  component: TimeCard,
  argTypes: {
    disabled: {control: 'boolean'},
    onPausePlay: { action: 'onPausePlay' },
    onRemove: { action: 'onRemove' },
    onEdit: { action: 'onEdit' },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <TimeCard {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Timer',
  description: 'Amet cupidatat occaecat excepteur nulla officia non culpa dolor laboris reprehenderit adipisicing.',
  timeElapsedMillis: 20000,
  runningSince: dayjs().add(-300, 'millisecond'),
};

