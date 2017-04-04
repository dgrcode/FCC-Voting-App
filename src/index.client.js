'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Redirect } from 'react-router';
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
  let pollsCookie = getCookie('polls');
  deleteCookie('polls');

  if (pollsCookie) {
    const polls = parseObjectFromCookie(pollsCookie);
    polls.map(poll => store.dispatch({ type: 'ADD_POLL', poll: poll }));
  } else {
    console.log('No encuentra el polls');
  }

  let historyCookie = getCookie('history');
  deleteCookie('history');
  console.log('historyCookie');
  console.log(historyCookie);
  let prevHistory = false;
  if (historyCookie) {
    prevHistory = decodeURIComponent(historyCookie);
  }

/*
  const RenderHistoryOrLayout = () => {
    // somehow location is defined here
    if (prevHistory) {
      history.push(prevHistory);
    }
    return <Layout location={location} />;
  };
*/

  ReactDOM.render(
    <Provider store={store}>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <Layout location={location} history={history} prevHistory={prevHistory}/>
    </Router>
    </Provider>
    , document.getElementById('main'));
};
