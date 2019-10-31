import * as React from 'react';
import {Redirect} from 'react-router-dom';

import routes from '@configs/routes'

import { LocalStorage } from '@app/utils/LocalStorage'

import Raw from './Raw';

const user = LocalStorage.getUser();

export default () => !!user
  ? <Raw name={user.name}/>
  : <Redirect to={routes.LOGIN.path}/>


