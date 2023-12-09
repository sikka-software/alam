import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { UAE } from '../flags';

export default {
  title: 'UAE',
  component: UAE,
  argTypes: {},
} as Meta<typeof UAE>;
type Story = StoryObj<typeof UAE>;

export const Default: Story = {
  render: () => (
    <div>
      <UAE />
    </div>
  ),
};
