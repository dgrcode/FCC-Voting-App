'use strict';

import React from 'react';
import PollsListContainer from '../containers/PollsListContainer';


class UserPollsPage extends React.Component {
  render () {
    return (
      <div className="app-root">
        <h1>My polls</h1>
        <h3>{this.props.user.name}, here are your polls</h3>
        <PollsListContainer filterByUserId={this.props.user._id}/>
      </div>
    );
  }
}

export default UserPollsPage;
