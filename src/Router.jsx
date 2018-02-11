import React from 'react';
import PropTypes from 'prop-types';

import { formatQuery, pickQuery } from './util';
import { History } from './history';


class Router extends React.Component {
  state = {
      location: {
          path: window.location.pathname,
          query: formatQuery(window.location.search)
      }
  };

  componentDidMount() {
      window.onpopstate = this.popState;
  }

  componentWillUnmount() {
      window.onpopstate = null;
  }

  popState = (event) => {
      this.setState({ location: {
          path: History.path(),
          query: formatQuery(History.query())
      } });
  }

  push = (path) => {
      this.setState({ location: {
          path: path.split('?')[0],
          query: pickQuery(path)
      } });
      History.push(History.state(), '', path);
  }

  back = () => {
      History.back();
  }

  getChildContext() {
      return {
          location: {
              push: this.push,
              back: this.back,
              path: this.state.location.path,
              query: this.state.location.query
          }
      };
  }

  render() {
      return this.props.render({
          push: this.push,
          back: this.back,
          path: this.state.location.path,
          query: this.state.location.query
      });
  }
}

Router.childContextTypes = {
  location: PropTypes.shape({
      path: PropTypes.string,
      push: PropTypes.func,
      back: PropTypes.func,
      query: PropTypes.object
  });
};

Router.propTypes = {
  render: PropTypes.func.isRequired
};

export default Router;
