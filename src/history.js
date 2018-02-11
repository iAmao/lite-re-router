export class History {
  static path = () => window.location.pathname;

  static query = () => window.location.search;

  static state = () => window.history.state;

  static push = (state, title, path) => {
    window.history.pushState(state, title, path);
  }

  static back = () => {
    window.history.back();
  }
}
