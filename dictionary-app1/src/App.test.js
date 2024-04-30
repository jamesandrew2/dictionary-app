import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Automatically mock the fetch function
beforeEach(() => {
  fetch.resetMocks();
});

test('renders input field and submit button', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/enter a word/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(inputElement).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('fetches definition on submit', async () => {
  fetch.mockResponseOnce(JSON.stringify({ definition: 'A fruit.' }));

  render(<App />);
  const inputElement = screen.getByPlaceholderText(/enter a word/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  // Simulate user typing a word and clicking submit
  fireEvent.change(inputElement, { target: { value: 'apple' } });
  fireEvent.click(submitButton);

  // Assuming you display the definition in an element with test id 'definition'
  const definitionElement = await screen.findByTestId('definition');

  expect(definitionElement).toBeInTheDocument();
  expect(definitionElement).toHaveTextContent('A fruit.');
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(expect.stringContaining('apple')); // Adjust the URL as per your actual API call
});
