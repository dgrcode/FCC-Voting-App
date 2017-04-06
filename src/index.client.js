'use strict';

/*global $*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import reducers from './client/reducers/reducers';
import WebSocket from 'ws';
import Layout from './client/components/Layout';
import commonStyle_ from './public/styles/common.sass';

const store = createStore(reducers);
const history = createBrowserHistory();

const getCookie = (name) => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const deleteCookie = (name) => {
  document.cookie = name + '=; max-age=0;';
};
const ws = new WebSocket('ws://localhost:8080');

const parseObjectFromCookie = (cookie) => {
  const decodedCookie = decodeURIComponent(cookie);
  return JSON.parse(decodedCookie);
ws.onopen = () => {
  console.log('Connected to WS');
};

ws.onmessage = (mevent) => {
  const message = mevent.data;
  const messsageObject = JSON.parse(message);
  if (messsageObject.isAction) {
    store.dispatch(messsageObject);
  }
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
