import * as React from 'react';
import {Redirect} from 'react-router-dom';

import routes from '@configs/routes';
import { LocalStorage } from '@app/utils/LocalStorage';

const LogoutBtn = () => {
  const [redirect, setTrue] = React.useState(false);

  const handleClick = () => {
    LocalStorage.removeUser()
    setTimeout(() => {
      setTrue(!redirect)
    }, 300)
  }

  return redirect
    ? <Redirect to={routes.LOGIN.path}/>
    : (
      <div onClick={handleClick}>
        Logout
      </div>
    );
}
export default LogoutBtn;