import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { BH } from '../flags';

export default {
  title: 'BH',
  component: BH,
  argTypes: {},
} as Meta<typeof BH>;
type Story = StoryObj<typeof BH>;

export const Default: Story = {
  render: () => (
    <div>
      <BH />
    </div>
  ),
};
