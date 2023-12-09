import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { QA } from '../flags';

export default {
  title: 'QA',
  component: QA,
  argTypes: {},
} as Meta<typeof QA>;
type Story = StoryObj<typeof QA>;

export const Default: Story = {
  render: () => (
    <div>
      <QA />
    </div>
  ),
};
