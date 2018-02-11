import React from 'react';

import renderer from 'react-test-renderer';

import { shallow, mount, render } from 'enzyme';

import { Router } from '../';


describe('Router', () => {
  describe('Snapshot Test', () => {
    it('should render the router component', () => {
      const tree = renderer.create(<Router render={() => (
        <div>
          <h3>Routing</h3>
        </div>
      )} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Unit Test', () => {
    it('should pop history state', () => {
      const wrapper = shallow(<Router render={() => <div />} />);
      wrapper.instance().popState();
      expect(wrapper.instance().state)
        .toEqual({ location: { path: '/', query: {} } });
    });

    it('should set a new path as state and push to new state', () => {
      const wrapper = shallow(<Router render={() => <div />} />);
      wrapper.instance().push('/button')
      expect(wrapper.instance().state)
        .toEqual({ location: { path: '/button', query: {} } });
    });

    it('should go back to previous path', () => {
      window.history.pushState(null, '', '/item');
      const wrapper = shallow(<Router render={() => <div />} />);
      window.history.pushState(null, '', '/button');
      wrapper.instance().back();
      expect(wrapper.instance().state)
        .toEqual({ location: { path: '/item', query: {} } })
    });

    it('should go display the query params', () => {
      const wrapper = shallow(<Router render={() => <div />} />);
      wrapper.instance().push('/item?q=la%20vie en rosie');
      expect(wrapper.instance().state)
        .toEqual({ location: {
            path: '/item', query: { q: 'la vie en rosie' }
          } });
    });

    it('should remove the onpopstate listener on unmount', () => {
      window.history.pushState(null, '', '/item');
      const wrapper = shallow(<Router render={() => <div />} />);
      const popState = window.onpopstate
      wrapper.instance().componentWillUnmount();
      expect(window.onpopstate === popState).toEqual(false)
    });
  });
});
