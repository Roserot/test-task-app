import * as React from 'react';
import {Redirect} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import { LocalStorage } from '@app/utils/LocalStorage';

import routes from '@configs/routes'

import {Header} from '@components/header';
import {Footer} from '@components/footer';
import {Slider} from '@components/slider';

import './style.scss';

const Raw = () =>  {
  const user = LocalStorage.getUser();

  return user
    ? (
      <>
        <Header name={user.name}/>
        <Body/>
        <Footer/>
      </>
    )
    : <Redirect to={routes.LOGIN.path}/>
};

const Body = () => (
  <Paper>
    <main className='main'>
      <Slider/>
    </main>
  </Paper>
)


export default Raw;