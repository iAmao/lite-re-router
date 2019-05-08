import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import { Back } from '../';
import { Context } from '../Router';


describe('Back', () => {
  describe('Snapshot Test', () => {
    it('renders a link', () => {
      const tree = renderer.create(
        <Back>Button</Back>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Unit Test', () => {
    it('should change context on click', () => {
      let count = 0;
      const props = { children: 'Button' };
      // const Component = (
      //   <Context.Provider value={{ location: { back: () => count++}}}>
      //     <Back {...props}/>
      //   </Context.Provider>
      // );
      const wrapper = shallow(
        <Context.Provider value={{ location: { back: () => count++}}}>
          <Back {...props}/>
        </Context.Provider>
      ).dive({context: { location: { back: () => count++}}});

      wrapper.simulate('click');

      expect(count).toEqual(1);
      expect(wrapper.text()).toEqual('Button');
    })
  });
});
