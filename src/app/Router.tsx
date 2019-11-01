import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import {Main} from '@components/routes/main'
import {Login} from '@components/routes/login'

import { routes } from '@configs/routes';

export const Router = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.MAIN.path} component={Main} />;
      <Route path={routes.LOGIN.path} component={Login} />;
    </Switch>
  </BrowserRouter>;
