import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'Pages/Home/Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Application/i);
  expect(linkElement).toBeInTheDocument();
});
