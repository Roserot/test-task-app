import config from '@configs/routes';
import {routes as routesPseudos} from '@configs/pseudos/routes';

import { Main } from './main';
import { Login } from './login';


type Route = {
  exact?:boolean;
  component:any;
  path:string;
}

export const routes:Array<Route> = [
  {
    exact: true,
    component: Main,
    path: config[routesPseudos.MAIN].path,
  },
  {
    component: Login,
    path: config[routesPseudos.LOGIN].path,
  },
];

export default routes;