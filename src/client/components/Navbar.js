'use strict';

import React from 'react';

export default class Navbar extends React.Component {
  render () {
    const user = this.props.user;
    const userLink = this.props.username || '#';

    const Options = () => {
      if (!user) {
        return <li><a href="#" data-toggle="modal" data-target="#modal-login">Login</a></li>;
      }
      return (
        <div className="user-menu">
          <li><a href="/new">
            <span className="glyphicon glyphicon-plus" aria-hidden="true" role="button"/>
          </a></li>
          <li><a href={userLink}>{user.name}</a></li>
          <li><a href="/logout">
            <span className="glyphicon glyphicon-off" aria-hidden="true" role="button"/>
          </a></li>
        </div>
      );
    };

    return (
      <div className="navbar">
        <div className="container">
          <a className="nav-brand" href="#">Voting App</a>
          <div className="nav-center search-wrapper">
            <input type="text" placeholder="Search"/>
            <span className="glyphicon glyphicon-search" aria-hidden="true" role="button"/>
          </div>
          <div className="nav-right">
            <Options/>
          </div>
        </div>
      </div>
    );
  }
}
