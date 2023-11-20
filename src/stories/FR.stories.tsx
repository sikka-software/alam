import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
// import { Story } from '@storybook/blocks';

import { FR } from '../flags';

export default {
  title: 'FR',
  component: FR,
  argTypes: {},
} as Meta<typeof FR>;
type Story = StoryObj<typeof FR>;

export const Default: Story = {
  render: () => (
    <div>
      <FR />
    </div>
  ),
};
