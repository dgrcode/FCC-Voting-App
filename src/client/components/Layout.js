'use strict';

import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Navbar from './Navbar';
import IndexPage from './IndexPage';
import PollPage from './PollPage';
import NewPollPage from './NewPollPage';
import LoginModal from './LoginModal';

const history = createBrowserHistory();

class Layout extends React.Component {
  render () {
    return (
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <div className="app-root">
        <Navbar user={null}/>
        <Route exact path="/" component={IndexPage}/>
        <Route path="/poll/:pollid" component={PollPage}/>
        <Route path="/new" component={NewPollPage}/>
        <LoginModal/>
      </div>
      </Router>
    );
  }
}

export default Layout;
