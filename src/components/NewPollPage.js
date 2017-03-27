'use strict';

import React from 'react';
import Navbar from './Navbar';
//import NotFoundPage from './NotFoundPage';


export default class PollPage extends React.Component {
  render () {
    console.log('Pinta el Poll');

    const user = this.props.user;

    return (
      <div className="app-root">
        <Navbar user={user}/>
        <h1>New Poll</h1>
      </div>
    );
  }
}
