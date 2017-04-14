'use strict';

import React from 'react';
import LoginButton from './LoginButton';

export default class LoginModal extends React.Component {
  render () {
    return (
      <div className="modal fade" id="modal-login" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h1 className="hidden">Login</h1>
              <h2>Welcome!</h2>
            </div>
            <div className="modal-body">
              <div className="login-social-container">
                <p>Sign in with:</p>
                <div className="social-buttons">
                  <LoginButton location={this.props.location} provider="facebook">FB</LoginButton>
                  <LoginButton location={this.props.location} provider="google">G</LoginButton>
                  <LoginButton location={this.props.location} provider="github">GH</LoginButton>
                  <LoginButton location={this.props.location} provider="twitter">T</LoginButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
