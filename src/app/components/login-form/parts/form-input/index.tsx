import * as React from 'react';

import TextField from '@material-ui/core/TextField';

type Props = {
  pseudo:string;
  value:string;
  callback: ({input, value}) => void;
}

const labels = {
  userName: 'User name',
  password: 'Password'
}

const FormInput = ({pseudo, value, callback}:Props) => (
  <TextField
    label={labels[pseudo] || ''}
    margin='normal'
    variant='outlined'
    value={value}
    onChange={(evt) => callback({
      input: pseudo,
      value: evt.target.value
    })}
  />
);

export default FormInput;