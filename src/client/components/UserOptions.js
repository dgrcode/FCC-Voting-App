'use strict';

/* global $ */
import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  logout = () => {
    this.props.logout();
    $.ajax({
      url: '/auth/logout',
      type: 'POST',
    })
    .catch(() => {
      console.log('Error logging out');
    });
  }

  render () {
    const user = this.props.user;
    const userLink = this.props.username || '#';

    if (!user) {
      return <li><button className="btn" href="#" data-toggle="modal" data-target="#modal-login">Login</button></li>;
    }

    return (
      <div className="user-menu">
        <li><Link to="/new">
          <span className="glyphicon glyphicon-plus" aria-hidden="true" role="button"/>
        </Link></li>
        <li><Link to="/userlink">{user.name}</Link></li>
        <li onClick={this.logout}>
          <span className="glyphicon glyphicon-off" aria-hidden="true" role="button"/>
        </li>
      </div>
    );
  }
}
