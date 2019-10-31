import * as React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import FormInput from './parts/form-input'
import LoginBtn from './parts/login-btn'


import './style.scss';
import StyledButton from '@components/styled-button'
import { AlertUtils } from '@app/utils/AlertUtils'

type Props = {
  toggleForm: (form:string) => void
}

type State = {
  userName:string;
  password:string;
}

class LoginForm extends React.Component<Props> {
  readonly state:State = LoginForm.getInitialState()

  render() {
    return (
      <div className='loginForm'>
        <Paper>
          <div className='loginForm__handler'>
            <Typography variant='h5'>
              Login
            </Typography>
            {this.renderInputs()}
            {this.renderButtons()}
          </div>
        </Paper>
      </div>
    )
  }

  renderButtons = () => {
    return (
      <>
        <StyledButton>
          <LoginBtn handleLogin={this.handleLogin}/>
        </StyledButton>
        </>
    )
}

  renderInputs = () => {
    const stateCopy = Object.assign({}, this.state);

    return Object.keys(stateCopy).map(input =>
      <FormInput
        key={input}
        pseudo={input}
        value={this.state[input]}
        callback={this.handleInputChange}
      />
    )
  }

  handleLogin = () => {
    if(!this.isInputsValid()) {
      AlertUtils.notValidLogin();
      return;
    }
  }

  isInputsValid = ():boolean => {
    const stateCopy = Object.assign({}, this.state);
    let valid = true;

    for (let input in stateCopy) {
      console.log(stateCopy[input])
      if(stateCopy[input].length <= 4)
        valid = false
    }

    return valid;
  }

  handleInputChange = ({input, value}:{value:string, input:string}) => {
      this.setState({
        [input]: value
      })
  }

  private static getInitialState = ():State => ({
    userName: '',
    password:'',
    });
}


export default LoginForm;