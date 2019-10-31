import * as React from 'react';
import { Link, Route, Router as BrowserRouter } from 'react-router-dom';

import history from '@lib/history';

import { routes } from '@routes';

export const Router = () =>
  <BrowserRouter history={history}>
    <Routes />
  </BrowserRouter>;

const Routes = () => {
  const map = ({ path, exact = false, component }) =>
    <Route key={path} path={path} exact={exact} component={component} />;

  const items = routes.map(map);

  return <>{items}</>;
};
