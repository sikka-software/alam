import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SA } from '../flags';

export default {
  title: 'SA',
  component: SA,
  argTypes: {},
} as Meta<typeof SA>;
type Story = StoryObj<typeof SA>;

export const Default: Story = {
  render: () => (
    <div>
      <SA />
    </div>
  ),
};
