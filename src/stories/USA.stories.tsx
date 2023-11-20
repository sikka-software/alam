import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
// import { Story } from '@storybook/blocks';

import { USA } from '../flags/USA';

export default {
  title: 'USA',
  component: USA,
  argTypes: {},
} as Meta<typeof USA>;
type Story = StoryObj<typeof USA>;

export const Default: Story = {
  render: () => (
    <div>
      <USA />
    </div>
  ),
};
