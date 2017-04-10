'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import UserOptionsContainer from '../containers/UserOptionsContainer';

export default class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar">
        <div className="container">
          <Link to="/" className="nav-brand nolink">Voting App</Link>
          <div className="nav-center search-wrapper">
            <input type="text" placeholder="Search"/>
            <span className="glyphicon glyphicon-search" aria-hidden="true" role="button"/>
          </div>
          <div className="nav-right">
            <UserOptionsContainer/>
          </div>
        </div>
      </div>
    );
  }
}
