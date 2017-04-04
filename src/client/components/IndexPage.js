'use strict';

import React from 'react';
import PollsListContainer from '../containers/PollsListContainer';
//import NotFoundPage from './NotFoundPage';


class IndexPage extends React.Component {
  render () {
    return (
      <div className="app-root">
        <h1>Voting App</h1>
        <PollsListContainer/>
      </div>
    );
  }
}

export default IndexPage;
