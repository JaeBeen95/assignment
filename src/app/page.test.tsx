import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('renders the page title', () => {
    render(<Home />);
    expect(screen.getByText('프로젝트 시작')).toBeInTheDocument();
  });
});
