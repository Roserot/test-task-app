import * as React from 'react';
import Paper from '@material-ui/core/Paper';

import {Header} from '@components/header';

type Props = {
  name:string;
}

import './style.scss';
import Slider from '@components/slider'

const Raw = (props:Props) => (
  <>
    <Header {...props}/>
    <Body/>
  </>
);

const Body = () => (
  <Paper>
    <main className='main'>
      <Slider/>
    </main>
  </Paper>
)


export default Raw;