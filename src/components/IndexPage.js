'use strict';

import React from 'react';
import { Link } from 'react-router-dom'
//import NotFoundPage from './NotFoundPage';


class IndexPage extends React.Component {
  render () {
    const user = this.props.user;
    const polls = [
      { name: 'p1', id: 1 },
      { name: 'p2', id: 2 },
      { name: 'p3', id: 3 },
      { name: 'p4', id: 4 },
      { name: 'p5', id: 5 }
    ];

    console.log('Pinta el IndexPage');
    console.log('User:');
    console.log(user);

    return (
      <div className="app-root">
        <h1>Voting App</h1>
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

export default IndexPage;
