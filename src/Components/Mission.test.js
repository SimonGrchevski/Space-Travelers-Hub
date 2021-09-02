import React from 'react';
import renderer from 'react-test-renderer';
import Mission from "./Mission";

it('expect quote page to match working snapshot', () => {
  const tree = renderer.create(<Mission />).toJSON();
  expect(tree).toMatchSnapshot();
});