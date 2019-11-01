import * as React from 'react';
import {Redirect} from 'react-router-dom';

import { LocalStorage } from '@app/utils/LocalStorage'
import routes from '@configs/routes'

import LoginForm  from '@components/login-form';


export default () => !!LocalStorage.getUser()
  ?  <Redirect to={routes.MAIN.path}/>
  :  <LoginForm/>;

