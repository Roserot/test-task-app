import * as React from 'react';
import {Redirect} from 'react-router-dom';

import routes from '@configs/routes'

import { LocalStorage } from '@app/utils/LocalStorage'

export default () => !!LocalStorage.getUser()
  ? <h1>Main</h1>
  : <Redirect to={routes.LOGIN.path}/>


