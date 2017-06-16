'use strict';

/*global $*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './client/reducers/reducers';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import WebSocket from 'ws';
import Layout from './client/components/Layout';
import commonStyle_ from './public/styles/common.sass';
import { getCookie, deleteCookie } from './utils/cookies';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const history = createBrowserHistory();

const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  console.log('Connected to WS');
};

ws.onmessage = (mevent) => {
  const message = mevent.data;
  // TODO handle possible problem with the messages
  const messsageObject = JSON.parse(message);
  console.log('NEW action.type:', messsageObject.type);
  store.dispatch(messsageObject);
};

$.get('/auth/whoami')
.then((userData) => {
  store.dispatch(userData);
})
.catch(() => {
  console.log('User not logged in');
});

window.onload = () => {
  // manage redirect cookie
  let redirectCookie = getCookie('redirect');
  deleteCookie('redirect');
  let redirect = false;
  if (redirectCookie) {
    redirect = decodeURIComponent(redirectCookie);
  }

  ReactDOM.render(
    <Provider store={store}>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <Layout location={location} history={history} redirect={redirect} ws={ws}/>
    </Router>
    </Provider>
    , document.getElementById('main'));
};
