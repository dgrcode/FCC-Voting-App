'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './components/IndexPage';

const user = {name: 'Peter la anguila'};
const polls = [
  {name: 'gordita'},
  {name: 'guapa'},
  {name: 'gordito'},
  {name: 'feo'},
];

window.onload = () => {
  ReactDOM.render(<IndexPage user={user} polls={polls}/>, document.getElementById('main'));
};
