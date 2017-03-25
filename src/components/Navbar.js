'use strict';

import React from 'react';
//import NotFoundPage from './NotFoundPage';

export default class Navbar extends React.Component {
  render() {
    const user = this.props.user;
    const usera = this.props.username || '#';

    const Options = () => {
      if (!user) {
        return <li><a href="#" data-toggle="modal" data-target="#modal-login">Login</a></li>
      }
      return (
        <div className="user-menu">
          <li><a href="/new">
            <span className="glyphicon glyphicon-plus" aria-hidden="true" role="button"></span>
          </a></li>
          <li><a href={usera}>{user.name}</a></li>
          <li><a href="/logout">
            <span className="glyphicon glyphicon-off" aria-hidden="true" role="button"></span>
          </a></li>
        </div>
      )
    }

    console.log('Pinta el Navbar');
    console.log('User:');
    console.log(user);

    return (
      <div className="navbar">
        <div className="container">
          <a className="nav-brand" href="#">Voting App</a>
          <div className="nav-center search-wrapper">
            <input type="text" placeholder="Search"></input>
            <span className="glyphicon glyphicon-search" aria-hidden="true" role="button"></span>
          </div>
          <div className="nav-right">
            <Options/>
          </div>
        </div>
      </div>
    );
  }
}
