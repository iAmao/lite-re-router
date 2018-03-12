import React from 'react';
import PropTypes from 'prop-types';

import { formatQuery, pickQuery } from './util';
import { History } from './history';


/**
 * @class Router - parent router component.
 * In charge of route event changes and routes state
 */
class Router extends React.Component {
  state = {
    location: {
      path: window.location.pathname,
      query: formatQuery(window.location.search)
    }
  };

  /**
   * @method componentDidMount - attach a function to "onpopstate" event,
   * just after render.
   * @member Router
   */
  componentDidMount() {
    window.onpopstate = this.popState;
  }

  /**
   * @method componentWillUnMount - remove event listener
   * @member Router
   */
  componentWillUnmount() {
    window.onpopstate = null;
  }

  /**
   * @method popState - trigherd by "onpopstate" event. update state properties
   * to current location properties
   * @member Router
   */
  popState = (event) => {
    this.setState({ location: {
      path: History.path(),
      query: formatQuery(History.query())
    } });
  }

  /**
   * @method push - navigate to new url
   * @member Router
   * @param {String} path - URL to navigate to
   */
  push = (path) => {
    this.setState({ location: {
      path: path.split('?')[0],
      query: pickQuery(path)
    } });
    History.push(History.state(), '', path);

  }

  /**
   * @method back - go back to previous URL
   * @member Router
   */
  back = () => {
    History.back();
  }

  /**
   * @method getChildContext
   * @member Router
   */
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

  /**
   * @method render
   * @member Router
   */
  render() {
    return this.props.render({
      push: this.push,
      back: this.back,
      path: this.state.location.path,
      query: this.state.location.query
    });
  }
}

// Type check child contexts
Router.childContextTypes = {
  location: PropTypes.shape({
    path: PropTypes.string,
    push: PropTypes.func,
    back: PropTypes.func,
    query: PropTypes.object
  })
};


// Type check props
Router.propTypes = {
  render: PropTypes.func.isRequired
};

export default Router;
