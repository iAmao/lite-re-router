import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import Link from '../Link';


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
            const wrapper = shallow(Link(
                { children: 'Button', href: '/button' },
                { location: { push: () => count++}}
            ));

            wrapper.simulate('click');

            expect(count).toEqual(1);
        })
    });
});
