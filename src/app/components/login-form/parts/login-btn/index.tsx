import * as React from 'react';

type Props = {
  handleLogin: () => void
}

const LoginBtn = ({handleLogin}:Props) => (
  <div onClick={handleLogin}>
    Login
  </div>
)

export default LoginBtn;