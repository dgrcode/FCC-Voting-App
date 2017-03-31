'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

class PollsList extends React.Component {
  render () {
    console.log('Pinta el PollsList');
    const polls = this.props.polls;
    console.log(polls);

    return (
      <div>
      <input id="inputtext" type="text"/>
      <button onClick={this.props.onClick}>add</button>
      <ul>
      {
        polls.map((poll, id) => (
          <li key={id}><Link to={`/poll/${poll.id}`}>
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
