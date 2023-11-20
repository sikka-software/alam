import React from 'react';
import renderer from 'react-test-renderer';
import { expect, it } from 'vitest';
import { SA } from '../src';

it('renders correctly', () => {
  const tree = renderer.create(<SA />).toJSON();
  expect(tree).toMatchSnapshot();
});
