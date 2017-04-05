'use strict';

import React from 'react';
import { Route } from 'react-router';
import Navbar from './Navbar';
import IndexPage from './IndexPage';
import PollPage from './PollPage';
import NewPollPage from './NewPollPage';
import LoginModal from './LoginModal';

class Layout extends React.Component {
  componentWillMount = () => {
    if (this.props.redirect) {
      this.props.history.push(this.props.redirect);
    } else {
      // TODO check if this is needed after changing <a> with <Link>
      this.props.history.push('/');
    }
  }

  render () {
    return (
      <div className="app-root">
        <Navbar user={null}/>
        <Route exact path="/" component={IndexPage}/>
        <Route path="/poll/:pollid" component={PollPage}/>
        <Route path="/new" component={NewPollPage}/>
        <LoginModal location={this.props.location}/>
      </div>
    );
  }
}

export default Layout;
