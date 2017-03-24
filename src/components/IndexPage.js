'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
//import NotFoundPage from './NotFoundPage';


class IndexPage extends React.Component {
  render() {
    const polls = [
      {name: 'gordita', id: 'g1'},
      {name: 'guapa', id: 'g2'},
      {name: 'gordito', id: 'g3'},
      {name: 'feo', id: 'g4'},
    ];

    console.log('Pinta el IndexPage');

    return (
      <div className="app-content-root">
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

IndexPage.contextTypes = {
  router: function () {
    return React.PropTypes.object.isRequired;
  }
};

export default IndexPage;
