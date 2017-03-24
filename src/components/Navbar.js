'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
//import NotFoundPage from './NotFoundPage';

export default class Navbar extends React.Component {
  render() {
    const user = this.props.user;
    const userLink = this.props.username || '#';

    return (
      <div className="navbar">
        <div className="container">
          <a className="nav-brand" href="#">Voting App</a>
          <div className="nav-center search-wrapper">
            <input type="text" placeholder="Search"></input>
            <span className="glyphicon glyphicon-search" aria-hidden="true" role="button"></span>
          </div>
          <div className="nav-right">
            {() => {
              if (!user) {
                return <li><Link to="#" data-toggle="modal" data-target="#modal-login">Login</Link></li>
              }
              return (
                <div className="user-menu">
                  <li><Link to="/new">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true" role="button"></span>
                  </Link></li>
                  <li><Link to={userLink}>{user.name}</Link></li>
                  <li><Link to="/logout">
                    <span className="glyphicon glyphicon-off" aria-hidden="true" role="button"></span>
                  </Link></li>
                </div>
              )
            }}
          </div>
        </div>
      </div>
    );
  }
}
