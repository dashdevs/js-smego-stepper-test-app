import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'Pages/Home/Home';
import { AllTheProviders } from '../../utils/test-utils';

test('renders learn react link', () => {
  render(
    <AllTheProviders>
      <Home />
    </AllTheProviders>,
  );
  const linkElement = screen.getByText(/Application/i);
  expect(linkElement).toBeInTheDocument();
});
