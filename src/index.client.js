'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './components/IndexPage';
import commonStyle_ from './public/styles/common.sass';

const user = { name: 'Peter la anguila', username: 'peteruser' };
const polls = [
  { name: 'gordita', id: 1 },
  { name: 'guapa', id: 2 },
  { name: 'gordito', id: 3 },
  { name: 'feo', id: 4 }
];

window.onload = () => {
  ReactDOM.render(<IndexPage user={user} polls={polls}/>, document.getElementById('main'));
};
