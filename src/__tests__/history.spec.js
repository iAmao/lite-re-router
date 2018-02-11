import { History } from '../History';


describe('History', () => {
  it('should return the current path', () => {
    window.history.pushState(null, '', '/button');
    expect(History.path()).toEqual('/button');
  });

  it('should return the history state', () => {
    expect(History.state()).toEqual(null);
  });

  it('should return the query string', () => {
    window.history.pushState(null, '', '/button?q=neon%20trees');
    expect(History.query()).toEqual('?q=neon%20trees');
  });

  it('should return the query string', () => {
    const path = window.location.pathname.substr(0);
    History.push(null, '', '/dudley');
    expect(path === window.location.pathname).toEqual(false);
    expect(window.location.pathname).toEqual('/dudley');
  });

  it('should return the query string', () => {
    History.push(null, '', '/dudley');
    History.push(null, '', '/movie');
    History.push(null, '', '/music');
    History.back();
    expect(window.location.pathname).toEqual('/music');
  });
})
