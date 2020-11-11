import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { items } from './data';

const rootElement = document.getElementById('root');
//console.log(items);

ReactDOM.render(<App items={items}/>, rootElement);
