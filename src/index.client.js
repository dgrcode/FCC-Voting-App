'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createPoll } from './client/actions/userActions';
import { userLogin } from './client/actions/userActions';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import reducers from './client/reducers/reducers';
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

const parseObjectFromCookie = (cookie) => {
  const decodedCookie = decodeURIComponent(cookie);
  return JSON.parse(decodedCookie);
};

window.onload = () => {
  // manage polls cookie
  let pollsCookie = getCookie('polls');
  deleteCookie('polls');
  if (pollsCookie) {
    const polls = parseObjectFromCookie(pollsCookie);
    polls.map(poll => store.dispatch(createPoll(poll)));
  } else {
    console.log('No encuentra el polls');
  }

  // manage user cookie
  let userCookie = getCookie('user');
  deleteCookie('user'); //TODO only for dev
  if (userCookie) {
    console.log('Encuentra un user');
    const user = parseObjectFromCookie(userCookie);
    store.dispatch(userLogin(user));
  }

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
      <Layout location={location} history={history} redirect={redirect}/>
    </Router>
    </Provider>
    , document.getElementById('main'));
};
