import * as React from 'react';
import {Redirect} from 'react-router-dom';

import routes from '@configs/routes'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import FormInput from './parts/form-input'
import LoginBtn from './parts/login-btn'
import StyledButton from '@components/styled-button'
import { AlertUtils } from '@app/utils/AlertUtils'
import { ApiConnector } from '@app/api/ApiConnector'
import { LocalStorage } from '@app/utils/LocalStorage'


import './style.scss';


type Props = {
  toggleForm: (form:string) => void
}

type State = {
  inputs: {
    userName:string;
    password:string;
  }
  loading: boolean;
  redirect: boolean
}

class LoginForm extends React.Component<Props> {
  readonly state:State = LoginForm.getInitialState()

  componentDidMount() {
    document.addEventListener('keypress', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.listener);
  }

  listener = (evt) => {
    if(evt.keyCode === 13)
      this.handleLogin();
  }

  render() {
    return (
      <div className='loginForm'>
        {this.redirect()}
        <Paper>
          <div className='loginForm__handler'>
            <Typography variant='h5'>
              {this.state.loading ? 'Loading...' : 'login'}
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

    return Object.keys(stateCopy.inputs).map(input =>
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
      AlertUtils.warning('Invalid input fields');
      return;
    }

    (async () => {
      this.setState({
        loading: true
      });

      const response = await ApiConnector.login();
      if(response.statusText !== 'OK') {
        AlertUtils.error('Failed to login');
        this.setState({
          loading: false
        });
        return;
      } else {
        response.data.forEach(user => {
          const {userName, password} = this.state.inputs;
          if(user.name === userName && user.password === password)
            this.loged(user);
        })
      }
    })()
  }

  redirect = () => this.state.redirect
    ? <Redirect to={routes.MAIN.path}/>
    : null;

  isInputsValid = ():boolean => {
    const stateCopy = Object.assign({}, this.state);
    let valid = true;

    for (let input in stateCopy.inputs) {
      if(stateCopy.inputs[input].length < 4)
        valid = false
    }

    return valid;
  }

  handleInputChange = ({input, value}:{value:string, input:string}) => {
      const inputs = {...this.state.inputs};
      inputs[input] = value;

      this.setState({
        inputs: inputs,
      })
  }

  loged = (user) => {
    LocalStorage.saveLogIn(user);

    this.setState({
      redirect: true
    })
  }

  private static getInitialState = ():State => ({
    inputs: {
      userName: '',
      password:'',
    },
    loading:false,
    redirect:false
    });
}


export default LoginForm;