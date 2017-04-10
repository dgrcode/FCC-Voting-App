'use strict';

/* global $ */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserOptions extends React.Component {
  logout = () => {
    this.props.logout();
    $.ajax({
      url: '/auth/logout',
      type: 'POST',
    })
    .catch(() => {
      console.log('Error logging out');
    });
    // TODO actually it should push to '/' only if the location is forbidden for
    // unauthenticated users. In other case, the user could stay there.
    this.props.history.push('/');
  }

  render () {
    const user = this.props.user;
    if (!user) {
      return <li><button className="btn" href="#" data-toggle="modal" data-target="#modal-login">Login</button></li>;
    }

    const userLink = user.username || user._id;
    console.log(user._id);
    return (
      <div className="user-menu">
        <ul>
          <li><Link className="nolink" to="/new">
            <span className="glyphicon glyphicon-plus" aria-hidden="true" role="button"/>
          </Link></li>
          <li><div className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={user.photo}/>
            </a>
            <ul className="dropdown-menu">
              <li><Link to="/new">New poll</Link></li>
              <li><Link to={`/${userLink}/polls`}>My polls</Link></li>
              <li><Link to={`/${userLink}/profile`}>Edit profile</Link></li>
              <li role="separator" className="divider"/>
              <li onClick={this.logout}>
                <a className="nolink" href="#">
                  <span className="glyphicon glyphicon-off" aria-hidden="true" role="button"/> Logout
                </a>
              </li>
            </ul>
          </div></li>
        </ul>
      </div>
    );
  }
}

const UserOptionsRouterProps = withRouter(UserOptions);

export default UserOptionsRouterProps;
