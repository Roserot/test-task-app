import * as React from 'react';
import Paper from '@material-ui/core/Paper';

import './style.scss';
import StyledButton from '@components/styled-button'
import LogoutBtn from '@components/logout-btn'

export const Footer = () => (
  <Paper>
    <footer className='footer'>
      <StyledButton>
        <LogoutBtn/>
      </StyledButton>
    </footer>
  </Paper>
)