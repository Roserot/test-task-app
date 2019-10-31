import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import './style.scss';

type Props = {
  name: string;
}

export const Header = ({name}:Props) =>
  <header className='header'>
    <Paper>
      <div className="header__inner">
        <Typography variant='h4'>
          <span className='header__name'>{name}</span>, welcome to our site!
        </Typography>
      </div>
    </Paper>
  </header>;

