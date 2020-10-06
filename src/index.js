import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log("PLEASE READ \n\n\nTHE ERROR of findDOMNode is coming from Semantic UI lib and the Issue is already raised on GitHub: https://github.com/Semantic-Org/Semantic-UI-React/issues/3819\nI could have switched to another component's lib, but I believe that's not the point here. Thanks for understanding.\n\n\nPLEASE READ");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
