'use strict';

import React from 'react';
import PollsListContainer from '../containers/PollsListContainer';
//import NotFoundPage from './NotFoundPage';


class IndexPage extends React.Component {
  render () {
    const user = this.props.user;

    console.log('Pinta el IndexPage');
    console.log('User:');
    console.log(user);

    return (
      <div className="app-root">
        <h1>Voting App</h1>
        <PollsListContainer/>
      </div>
    );
  }
}

export default IndexPage;
