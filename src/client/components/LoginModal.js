'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
//import NotFoundPage from './NotFoundPage';


class LoginModal extends React.Component {
  render () {
    console.log('Pinta el LoginModal');

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
                  <a className="login-social-btn" href="/auth/facebook" role="button">FB</a>
                  <a className="login-social-btn" href="/auth/google" role="button">G</a>
                  <a className="login-social-btn" href="/auth/github" role="button">GH</a>
                  <a className="login-social-btn" href="/auth/twitter" role="button">T</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
