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
    if (!user) {
      return <li><button className="btn" href="#" data-toggle="modal" data-target="#modal-login">Login</button></li>;
    }

    const userLink = user.username || user.dbId;
    return (
      <div className="user-menu">
        <ul>
          <li><Link className="nolink" to="/new">
            <span className="glyphicon glyphicon-plus" aria-hidden="true" role="button"/>
          </Link></li>
          <li><Link className="nolink" to="/userlink">{user.name}</Link></li>
          <li onClick={this.logout}>
            <a className="nolink" href="#"><span className="glyphicon glyphicon-off" aria-hidden="true" role="button"/></a>
          </li>
        </ul>
      </div>
    );
  }
}
