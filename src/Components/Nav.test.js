import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

jest.mock('./Nav.js');

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Link to="/">Rockets</Link>
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});