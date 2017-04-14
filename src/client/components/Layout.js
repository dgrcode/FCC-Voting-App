'use strict';

import React from 'react';
import { Route } from 'react-router';
import Navbar from './Navbar';
import HomePage from './HomePage';
import PollPageContainer from '../containers/PollPageContainer';
import NewPollPageContainer from '../containers/NewPollPageContainer';
import UserPollsPageContainer from '../containers/UserPollsPageContainer';
import LoginModal from './LoginModal';

export default class Layout extends React.Component {
  componentWillMount = () => {
    if (this.props.redirect) {
      this.props.history.push(this.props.redirect);
    } else {
      // TODO check if this is needed after changing <a> with <Link>
      this.props.history.push('/');
    }
  }

  render () {
    const ws = this.props.ws;
    return (
      <div className="app-root">
        <Navbar/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/poll/:pollId" render={(props) => <PollPageContainer ws={ws} {...props}/>}/>
        <Route path="/new" render={(props) => <NewPollPageContainer ws={ws} {...props}/>}/>
        <Route path="/:id/polls" component={UserPollsPageContainer}/>
        <LoginModal location={this.props.location}/>
      </div>
    );
  }
}
