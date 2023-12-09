import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { KW } from '../flags';

export default {
  title: 'KW',
  component: KW,
  argTypes: {},
} as Meta<typeof KW>;
type Story = StoryObj<typeof KW>;

export const Default: Story = {
  render: () => (
    <div>
      <KW />
    </div>
  ),
};
