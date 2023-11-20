import React from 'react';
import renderer from 'react-test-renderer';
import { expect, it } from 'vitest';
import { USA } from '../src';

it('renders correctly', () => {
  const tree = renderer.create(<USA />).toJSON();
  expect(tree).toMatchSnapshot();
});
