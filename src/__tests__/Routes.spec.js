import React from 'react';

import renderer from 'react-test-renderer';

import { shallow, mount, render } from 'enzyme';

import { Routes, Router } from '../';


describe('Routes', () => {
  describe('Snapshot Test', () => {
    it('should render the router component', () => {
      const tree = renderer.create(
        <Router render={() => {
          return <Routes routes={() => (
            [
              ['/', () => <h3>Home</h3>]
            ]
          )} />
        }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Integration Test', () => {
    it('should match component to route', () => {
      let wrapper = mount(<Router render={() => {
          return <Routes routes={() => (
            [
              ['/', () => <h3>Home</h3>],
              ['/about', () => <h3>About</h3>]
            ]
          )} />
        }} />);
      expect(wrapper.find('h3').text()).toEqual('Home');
      window.history.pushState(null, '', '/about');
      wrapper = mount(<Router render={() => {
          return <Routes routes={() => (
            [
              ['/', () => <h3>Home</h3>],
              ['/about', () => <h3>About</h3>]
            ]
          )} />
        }} />);
      expect(wrapper.find('h3').text()).toEqual('About');
    });

    it('should match component with route param', () => {
      window.history.pushState(null, '', '/about/me');
      let wrapper = mount(<Router render={() => {
          return <Routes routes={() => (
            [
              ['/about/:id', (props) => <h3>About {props.location.params.id}</h3>],
            ]
          )} />
        }} />);
      expect(wrapper.find('h3').text()).toEqual('About me');
    });

    it('should match component with exact rote if specified', () => {
      window.history.pushState(null, '', '/about/me');
      let wrapper = mount(<Router render={() => {
          return <Routes routes={() => (
            [
              ['/about/:id', (props) => <h3>About {props.location.params.id}</h3>],
              ['/about/me', (props) => <h3>About Me</h3>],
              ['/about/edit/:id', (props) => <h3>Edit about Me</h3>]
            ]
          )} />
        }} />);
      expect(wrapper.find('h3').text()).toEqual('About Me');
    });

    it('should return a default 404 page if a route is not found', () => {
      window.history.pushState(null, '', '/about/me');
      let wrapper = mount(<Router render={() => {
          return <Routes routes={() => (
            [
              ['/', () => <h3>Home</h3>],
            ]
          )} />
        }} />);
      expect(wrapper.find('h2').text()).toEqual('404!');
    });

    it('should return a 404 page if a route is not found', () => {
      window.history.pushState(null, '', '/about/me');
      let wrapper = mount(<Router render={() => {
          return <Routes routes={() => (
            [
              ['/', () => <h3>Home</h3>],
              ['*', () => <h3>404</h3>],
            ]
          )} />
        }} />);
      expect(wrapper.find('h3').text()).toEqual('404');
    });
  });
});
