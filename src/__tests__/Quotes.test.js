import { render, act } from '@testing-library/react';
import Quotes from '../pages/Quotes';

global.fetch = require('jest-fetch-mock');

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponse(JSON.stringify([{ quote: 'Two head is better one', author: 'Anonimous' }]));
});

it('Render correctly', async () => {
  const quote = await act(async () => render(<Quotes />));

  expect(quote).toMatchSnapshot();
});
