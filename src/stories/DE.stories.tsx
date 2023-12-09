import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DE } from '../flags';

export default {
  title: 'DE',
  component: DE,
  argTypes: {},
} as Meta<typeof DE>;
type Story = StoryObj<typeof DE>;

export const Default: Story = {
  render: () => (
    <div>
      <DE />
    </div>
  ),
};
