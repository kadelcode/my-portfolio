import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an hello message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, I'm Ayodele Kadiri/i);
  expect(linkElement).toBeInTheDocument();
});
