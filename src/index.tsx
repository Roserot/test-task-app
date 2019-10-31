import * as React from 'react';
import { render } from 'react-dom';

import {routes} from '@configs/routes';
import history from '@lib/history'

import App from '@app/App';

import './app/scss/_main.scss';
import { LocalStorage } from '@app/utils/LocalStorage'

if(!!LocalStorage.getUser()) {
  console.log(LocalStorage.getUser())
  history.location.push(routes.LOGIN)
}

const app = document.getElementById('app');

console.log(LocalStorage.getUser());
render(<App/>, app);
