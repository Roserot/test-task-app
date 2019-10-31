import * as React from 'react';
import { render } from 'react-dom';

import App from '@app/App';

import './app/scss/_main.scss';

const app = document.getElementById('app');

render(<App/>, app);
