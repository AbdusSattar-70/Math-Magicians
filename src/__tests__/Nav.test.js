import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

it('test Header rendering', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>,
  );
  const H1 = screen.getByText(/Math Magicians/i);
  expect(H1.textContent).toBe('Math Magicians');
});

it('test navbar render', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>,
  );
  const tree = renderer
    .create(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    )
    .toJSON();
  const navbar = screen.getAllByRole('link');
  expect(navbar).toHaveLength(3);
  expect(tree).toMatchSnapshot();
});
