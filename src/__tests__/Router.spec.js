import React from 'react';

import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import { Router } from '../';


describe('Router', () => {
  describe('Snapshot Test', () => {
    it('should render the router component', () => {
      const tree = renderer.create(<Router />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
