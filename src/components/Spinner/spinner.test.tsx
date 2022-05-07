import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '.';

test('spinner renders correctly', () => {
  const { queryByTestId } = render(<Spinner />);
  expect(queryByTestId(/spinner/i)).toBeInTheDocument();
});
