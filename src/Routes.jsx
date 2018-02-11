import PropTypes from 'prop-types';
import { getParams } from './util';
import fourOhFourPage from './FourOhFour';

/**
 * Routes component. responsible fo rmatching active route to the right component
 * @param {object} props - properties of this component
 * @param {object} context - inherited properties from parent componentDidMount
 * @return {node} - component for current route
 */
const Routes = (props, context) => {
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
      routeParams = params;
      return trueRoute === path;
    }
    return route[0] === path;
  });

  // Make a copy of the context
  const routeProps = JSON.parse(JSON.stringify(context));

  // IF no route was matched, return 404
  if (!activeRoute.length) {
    if (!fourOhFour) {
      // default 404 page
      return fourOhFourPage();
    }
    return fourOhFour[1](routeProps);
  }

  // Set route params, if param symbol ":" is present in route,
  // set the parameter to the variable declared above;
  routeProps.location.params = activeRoute[0][0].match(':') ? routeParams : {};
  return activeRoute[0][1](routeProps);
}


// Type checking the context
Routes.contextTypes = {
  location: PropTypes.shape({
    path: PropTypes.string,
    query: PropTypes.object,
    push: PropTypes.func
  })
};

// Type checking the proptypes
Routes.propTypes = {
  routes: PropTypes.func
};

export default Routes;
