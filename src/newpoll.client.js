'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import NewPollPage from './components/NewPollPage';
import commonStyle_ from './public/styles/common.sass';

const user = { name: 'Peter la anguila', username: 'peteruser' };

window.onload = () => {
  ReactDOM.render(<NewPollPage user={user}/>, document.getElementById('main'));
};
