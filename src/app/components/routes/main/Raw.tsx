import * as React from 'react';
import {Header} from '@components/header';

type Props = {
  name:string;
}

const Raw = (props:Props) => (
  <>
    <Header {...props}/>
    <Body/>
  </>
);

const Body = () => (
  <main>
    main
  </main>
)


export default Raw;