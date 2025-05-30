import { render, screen } from '@testing-library/react';
import App from './App';

test('renders any heading text', () => {
  render(<App />);

  const heading = screen.getByText(/Chào Cô/i); 
 
  expect(heading).toBeInTheDocument();
});