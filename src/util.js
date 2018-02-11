export const formatQuery = (queries) => {
  if (!queries.length) {
        return {};
    }
    const splitQueries = queries.substr(1).split('&');
    return splitQueries.reduce((queryObj, query) => {
        queryObj[decodeURI(query.split('=')[0])] = decodeURI(query.split('=')[1]);
        return queryObj
    }, {});
}

export const pickQuery = (path) => {
  const splitRoute = path.split('?');
  return splitRoute.length > 1 ? formatQuery(`?${splitRoute[1]}`) : {};
}
