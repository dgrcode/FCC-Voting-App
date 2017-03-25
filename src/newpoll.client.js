'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import NewPollPage from './components/NewPollPage';
import commonStyle from './public/styles/common.sass';

const user = {name: 'Peter la anguila', username: 'peteruser'};
const polls = [
  {name: 'gordita'},
  {name: 'guapa'},
  {name: 'gordito'},
  {name: 'feo'},
];

window.onload = () => {
  ReactDOM.render(<NewPollPage user={user}/>, document.getElementById('main'));
};
