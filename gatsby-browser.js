import ReactGA from 'react-ga';
ReactGA.initialize('UA-90327083-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};