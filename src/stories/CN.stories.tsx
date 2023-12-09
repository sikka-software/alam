import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { CN } from '../flags';

export default {
  title: 'CN',
  component: CN,
  argTypes: {},
} as Meta<typeof CN>;
type Story = StoryObj<typeof CN>;

export const Default: Story = {
  render: () => (
    <div>
      <CN />
    </div>
  ),
};
