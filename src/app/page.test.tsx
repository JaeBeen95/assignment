import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('renders the dashboard title', () => {
    render(<Home />);
    expect(screen.getByText('탄소 배출량 대시보드')).toBeInTheDocument();
  });
});
