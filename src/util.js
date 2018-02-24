/**
 * formatQuery - format a uri query string into a query object;
 * @param {String} queries - uri query string
 * @return {Object} - query object
 */
export const formatQuery = (queries) => {
  return queries.length ?
    queries.substr(1).split('&').reduce((queryObj, query) => {
      queryObj[decodeURI(query.split('=')[0])] = decodeURI(query.split('=')[1]);
      return queryObj;
    }, {}) : {};
};


/**
 * pickQuery - construct query object from an absolute url
 * @param {String} path - absolute url
 * @return {Object} - query object
 */
export const pickQuery = (path) => {
  const splitRoute = path.split('?');
  return splitRoute.length > 1 ? formatQuery(`?${splitRoute[1]}`) : {};
};


/**
 * getParams - contruct the real url and param object from active routes
 * @param {String} activeRoute - current route to generate param for
 * @param {String} path - current url
 * @return {Object} - both the true url and the param object
 */
export const getParams = (activeRoute, path) => {
  // split routes into sections
  const splitRoute = activeRoute.split('/');
  const splitPath = path.split('/');

  // Loop through each section in the active route
  const params = splitRoute.reduce((param, route, index) => {
    // check if section is the param
    if (route.match(':')) {
      // set the value of the param
      param[route.substr(1)] = splitPath[index];
    }
    return param;
  }, {});

  // Loop through each section in the real route to construct a url
  const trueRoute = splitRoute
    .map((routeFrag) => params[routeFrag.substr(1)] || routeFrag)
    .join('/');

  return { trueRoute, params };
}
/**
 * isCallableCheck - checks if a function is a callable or constructable
 * and a boolean in the either cases
 * @export
 * @param {function} obj 
 * @returns {boolean}  - returns true or false
 */
export function isCallableCheck(obj) {
  try {
    obj();
  } catch (err) {
    return false;
  }
  return true;
}
