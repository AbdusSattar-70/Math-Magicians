import renderer from 'react-test-renderer';
import Errorpage from '../pages/ErrorPage';

it('renders correctly', () => {
  const tree = renderer
    .create(<Errorpage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
