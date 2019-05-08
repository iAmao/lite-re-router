import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import { Link } from '../';
import { Context } from '../Router';


describe('Link', () => {
  describe('Snapshot Test', () => {
    it('renders a link', () => {
      const tree = renderer.create(
        <Link href="/button">Button</Link>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Unit Test', () => {
    it('should change context on click', () => {
      let count = 0;
      const props = { children: 'Button', href: '/button' };
    //   const Component = (
    //     <Context.Provider value={{ location: { push: () => count++}}}>
    //       <Link {...props}/>
    //     </Context.Provider>
    //   );
      const wrapper = shallow(
        <Context.Provider value={{ location: { push: () => count++}}}>
            <Link {...props}/>
        </Context.Provider>
      ).shallow();

      wrapper.simulate('click');

      expect(count).toEqual(1);
    })
  });
});
