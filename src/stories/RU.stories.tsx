import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { RU } from '../flags';

export default {
  title: 'RU',
  component: RU,
  argTypes: {},
} as Meta<typeof RU>;
type Story = StoryObj<typeof RU>;

export const Default: Story = {
  render: () => (
    <div>
      <RU />
    </div>
  ),
};
