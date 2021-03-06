'use strict';

import React from 'react';
import PollsListContainer from '../containers/PollsListContainer';
import PollsOnHoldContainer from '../containers/PollsOnHoldContainer';
//import NotFoundPage from './NotFoundPage';


export default class HomePage extends React.Component {
  render () {
    return (
      <div className="app-root">
        <h1>Voting App</h1>
        <PollsOnHoldContainer/>
        <PollsListContainer/>
      </div>
    );
  }
}
