import * as React from 'react';
import Paper from '@material-ui/core/Paper';

import {Header} from '@components/header';
import {Footer} from '@components/footer';
import {Slider} from '@components/slider'

type Props = {
  name:string;
}

import './style.scss';

const Raw = (props:Props) => (
  <>
    <Header {...props}/>
    <Body/>
    <Footer/>
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