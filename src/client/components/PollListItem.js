'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import EditButton from './EditButton';

class PollsListItem extends React.Component {
  render () {
    const poll = this.props.poll;
    const user = this.props.user;

    return (
      <div className="poll-list-item">
      <Link to={`/poll/${poll._id}`}>
        {poll.name} <span>{poll.dateCreated}</span>
      </Link>
      <EditButton poll={poll} user={user}/>
      </div>
    );
  }
}

export default PollsListItem;
