import React from 'react';
import renderer from 'react-test-renderer';
import { expect, it } from 'vitest';
import { BH } from '../src';

it('renders correctly', () => {
  const tree = renderer.create(<BH />).toJSON();
  expect(tree).toMatchSnapshot();
});
