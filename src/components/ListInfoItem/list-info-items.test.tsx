import React from 'react';
import { render, screen } from '@testing-library/react';
import ListInfoItem from '.';

test('renders list info item without value', () => {
  const { queryByTestId } = render(<ListInfoItem label="test" />);
  expect(queryByTestId(/list-info-item/i)).toBeNull();
});

test('renders list info with value', () => {
  render(<ListInfoItem label="test" value="test value" />);
  expect(screen.getByTestId('list-info-item-label')).toHaveTextContent('test value');
});

test('label render correcly', () => {
  render(<ListInfoItem label="some label" value="test" />);
  expect(screen.getByTestId('list-info-item')).toHaveTextContent('some label');
});
