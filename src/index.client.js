'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './client/reducers/reducers';
import Layout from './client/components/Layout';
import commonStyle_ from './public/styles/common.sass';

const user = { name: 'Peter la anguila', username: 'peteruser' };
const polls = [
  { name: 'gordita', id: 1 },
  { name: 'guapa', id: 2 },
  { name: 'gordito', id: 3 },
  { name: 'feo', id: 4 }
];
const store = createStore(reducers);

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Layout/>
    </Provider>
    , document.getElementById('main'));
};
