import * as React from 'react';

import Button from '@material-ui/core/Button';

import './style.scss'

type Props = {
  children:any;
}

const StyledButton = ({children}:Props) => (
  <div className='styledButton'>
    <Button variant="outlined" color='primary'>
      {children}
    </Button>
  </div>
)

export default StyledButton;