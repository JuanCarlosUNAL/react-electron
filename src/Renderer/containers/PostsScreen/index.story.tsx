import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { PostsScreen } from '.';
import { Props } from './types';
import dayjs from 'dayjs';

// This default export determines where you story goes in the story list
export default {
  title: 'Screens / Time Cards',
  component: PostsScreen,
  argTypes: {
    edit: { action: 'edit' },
    pausePlay: { action: 'pausePlay' },
    remove: { action: 'remove' },
    onDrop:  { action: 'drop' },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <PostsScreen {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  timers: [
    {
      id: 'jfjsda-kjasdklfj-fklkjsa',
      name: 'This is a name 1',
      description: 'Irure esse labore occaecat adipisicing consequat.',
      timeElapsedMillis: 3438756328,
      runningSince: null,
    },
    {
      id: 'jfjsda-kjasdklfj-fklkjsb',
      name: 'This is a name 2',
      description: 'Irure esse labore occaecat adipisicing consequat.',
      timeElapsedMillis: 875436,
      runningSince: dayjs().subtract(40, 'minute'),
    },
    {
      id: 'jfjsda-kjasdklfj-fklkjsc',
      name: 'This is a name 3',
      description: 'Irure esse labore occaecat adipisicing consequat.',
      timeElapsedMillis: 5769465,
      runningSince: null,
    },
  ],
};


