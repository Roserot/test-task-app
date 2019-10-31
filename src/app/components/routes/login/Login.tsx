import * as React from 'react';
import {Redirect} from 'react-router-dom';

import routes from '@configs/routes'

import LoginForm  from '@components/login-form';
import { LocalStorage } from '@app/utils/LocalStorage'

export default () => !!LocalStorage.getUser()
  ?  <Redirect to={routes.MAIN.path}/>
  :  <LoginForm/>;

