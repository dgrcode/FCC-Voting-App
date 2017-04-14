'use strict';

import React from 'react';

export default class LoginButton extends React.Component {
  clickHandler = () => {
    document.cookie = 'redirect=' + this.props.location.pathname;
  };

  render () {
    return (
      <a
        href={`/auth/${this.props.provider}`}
        className="login-social-btn"
        role="button"
        onClick={this.clickHandler}>
          {this.props.children}
      </a>
    );
  }
}
