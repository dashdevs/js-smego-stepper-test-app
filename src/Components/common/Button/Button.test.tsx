import { fireEvent, render, screen } from '@testing-library/react';
import Button from './';

test('Render Button with text inside', () => {
  render(<Button onClick={() => {}} text="test button" />);

  expect(screen.getByText(/test button/)).toBeInTheDocument();
});

it('Test onClick on Button', () => {
  const mockOnClick = jest.fn();
  const { getByTestId } = render(<Button onClick={mockOnClick()} text="test" />);

  const clickIndicator = getByTestId('ClickIndicator');

  fireEvent.click(clickIndicator);

  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
