import { render, screen } from '@testing-library/react';
import App from './App';

test('renders any heading text', () => {
  render(<App />);
  //const heading = screen.getByRole('heading'); // Kiểm tra thẻ <h1> bất kyf
  const heading = screen.getByText(/Con Cac/i); // Kiểm tra nội dung của thẻ <h1>
  const paragraph = screen.getByRole('paragraph'); // Kiểm tra nội dung của thẻ <p>
  expect(heading).toBeInTheDocument();
});