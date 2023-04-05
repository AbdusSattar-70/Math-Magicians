import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home page', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
