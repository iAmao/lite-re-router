/**
 * @class History - wrapper around the History API
 */
export class History {

  /**
   * @method path - get current url path
   * @return {String} - returns url path
   */
  static path = () => window.location.pathname;

  /**
   * @method query - get current query string
   * @return {String} - returns a query string
   */
  static query = () => window.location.search;

  /**
   * @method state - get current state of history
   * @return {String} - returns a history state
   */
  static state = () => window.history.state;

  /**
   * @method push - update current url without refreshing the entire page
   * @param {any} state - state of history
   * @param {String} title - route title
   * @param {String} path - url to change to
   * @return {void}
   */
  static push = (state, title, path) => {
    window.history.pushState(state, title, path);
  }

  /**
   * @method back - return to previous url without refreshing
   * @return {void}
   */
  static back = () => {
    window.history.back();
  }
}
