import React from 'react';
import PropTypes from 'prop-types';
import { getParams } from './util';
import fourOhFourPage from './FourOhFour';
import { Context } from './Router';

/**
 * Routes component. responsible fo rmatching active route to the right component
 * @param {object} props - properties of this component
 * @param {object} context - inherited properties from parent componentDidMount
 * @return {node} - component for current route
 */
const Routes = (props) => {
  // Get context
  const context = React.useContext(Context);

  // Get current path;
  const path = context.location.path;
  let routeParams;
  let fourOhFour;
  // Loop through each individual route
  const activeRoute = props.routes(path).filter((route) => {
    // If the current route is a wildcard, set the 404 page to
    // the component.
    if (route[0] === '*') {
      fourOhFour = route;
      return false;
    }

    // check if route contains parameters
    const hasParams = route[0].match(':');

    // If route has parameters
    if (hasParams) {
      // Get the parameter and real route before adding values to the params
      const { trueRoute, params } = getParams(route[0], path);

      // Set the route parameter so it can be accessed outside this scope
      if (trueRoute === path) {
        routeParams = params;
        return true;
      }
      return false;
    }
    return route[0] === path;
  });

  // Make a copy of the context
  const routeProps = JSON.parse(JSON.stringify(context));
  routeProps.location.push = context.location.push;
  routeProps.location.back = context.location.back;

  // IF no route was matched, return 404
  if (!activeRoute.length) {
    if (!fourOhFour) {
      // default 404 page
      return fourOhFourPage();
    }
    return fourOhFour[1](routeProps);
  }

  let closestMatch;

  if (activeRoute.length > 1) {
    closestMatch = activeRoute.filter((route) => path === route[0])[0];
  } else {
    closestMatch = activeRoute[0];
  }

  const Component = closestMatch[1];

  // Set route params, if param symbol ":" is present in route,
  // set the parameter to the variable declared above;
  routeProps.location.params = closestMatch[0].match(':') ? routeParams : {};
  
  return <Component { ...routeProps} />
}

// Type checking the proptypes
Routes.propTypes = {
  routes: PropTypes.func
};

export default Routes;
