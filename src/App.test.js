import { render, screen } from '@testing-library/react';
import App from './App';

test('renders any heading text', () => {
  render(<App />);
  const heading = screen.getByRole('heading'); // Kiểm tra thẻ <h1> bất kỳ
  expect(heading).toBeInTheDocument();
});