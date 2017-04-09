'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

class PollsList extends React.Component {
  render () {
    const polls = this.props.polls;

    return (
      <div>
      <ul>
      {
        polls.map((poll, id) => (
          <li key={id}><Link to={`/poll/${poll._id}`}>
            {poll.name} <span>{poll.dateCreated}</span>
          </Link></li>
        ))
      }
      </ul>
      </div>
    );
  }
}

export default PollsList;
