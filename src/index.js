import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
//Redux imports vvvvvv
import {Provider} from 'react-redux';
import store from './ducks/store';
//Redux imports ^^^^^^
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
