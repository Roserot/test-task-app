import config from '@configs/routes';

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
    path: config.MAIN.path,
  },
  {
    exact: true,
    component: Login,
    path: config.LOGIN.path,
  },
];

export default routes;
