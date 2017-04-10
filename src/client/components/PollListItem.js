'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

class PollsListItem extends React.Component {
  render () {
    const poll = this.props.poll;
    const uId = this.props.uId;

    const EditButton = () => {
      if (poll.owner === uId) {
        return <button className="btn btn-default">Edit</button>;
      }
      return null;
    };

    return (
      <div className="poll-list-item">
      <Link to={`/poll/${poll._id}`}>
        {poll.name} <span>{poll.dateCreated}</span>
      </Link>
      <EditButton/>
      </div>
    );
  }
}

export default PollsListItem;
