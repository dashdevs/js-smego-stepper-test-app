import { render, screen } from '@testing-library/react';
import Card from './';

describe('Test Card children', () => {
  it('should paste it into the component', () => {
    render(
      <Card>
        <div>TEST</div>
      </Card>,
    );
    expect(screen.getByText(/TEST/)).toBeInTheDocument();
  });
});
