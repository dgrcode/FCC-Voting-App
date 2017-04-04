'use strict';

/*global $*/
import React from 'react';

class LoginButton extends React.Component {
  clickHandler = () => {
    $.ajax({
      url: '/api/redirect',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ redirect: this.props.location.pathname })
    });
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

export default LoginButton;
