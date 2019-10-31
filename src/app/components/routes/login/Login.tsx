import * as React from 'react';

import LoginForm  from '@components/login-form';

export default () => {
    const [form, toggleForm] = React.useState('login');

    return form === 'login'
      ?  <LoginForm toggleForm={toggleForm}/>
      :  null;
}

