import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('<App />', () => {
  const { getAllByText } = render(<App />);
  const allCards = getAllByText(/~ ~ ~/i);
  expect(allCards).toHaveLength(12);
});
