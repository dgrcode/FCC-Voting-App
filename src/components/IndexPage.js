'use strict';

import React from 'react';
import Navbar from './Navbar';
//import NotFoundPage from './NotFoundPage';


class IndexPage extends React.Component {
  render () {
    const user = this.props.user;
    const polls = this.props.polls;

    console.log('Pinta el IndexPage');
    console.log('User:');
    console.log(user);

    return (
      <div className="app-root">
        <Navbar user={user}/>
        <h1>Voting App</h1>
        <ul>
        {
          polls.map((poll, id) => (
            <li key={id}><a href={`/poll/${poll.id}`}>
              {poll.name} <span>{poll.dateCreated}</span>
            </a></li>
          ))
        }
        </ul>
      </div>
    );
  }
}

IndexPage.contextTypes = {
  router: function () {
    return React.PropTypes.object.isRequired;
  }
};

export default IndexPage;
