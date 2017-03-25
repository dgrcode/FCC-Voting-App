'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PollPage from './components/PollPage';
import commonStyle from './public/styles/common.sass';

const user = {name: 'Peter la anguila', username: 'peteruser'};
const polls = [
  {name: 'gordita'},
  {name: 'guapa'},
  {name: 'gordito'},
  {name: 'feo'},
];

window.onload = () => {
  ReactDOM.render(<PollPage user={user} polls={polls}/>, document.getElementById('main'));
};
