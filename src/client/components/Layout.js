'use strict';

import React from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './Navbar';
import HomePage from './HomePage';
import EditPollPageContainer from '../containers/EditPollPageContainer';
import PollPageContainer from '../containers/PollPageContainer';
import NewPollPageContainer from '../containers/NewPollPageContainer';
import UserPollsPageContainer from '../containers/UserPollsPageContainer';
import LoginModal from './LoginModal';

export default class Layout extends React.Component {
  render () {
    const ws = this.props.ws;
    return (
      <div className="app-root">
        <Navbar/>
        <Route exact path="/" component={HomePage}/>
        <Switch>
          <Route path="/poll/:pollId/edit" render={(props) => <EditPollPageContainer ws={ws} {...props}/>}/>
          <Route path="/poll/:pollId" render={(props) => <PollPageContainer ws={ws} {...props}/>}/>
        </Switch>
        <Route path="/new" render={(props) => <NewPollPageContainer ws={ws} {...props}/>}/>
        <Route path="/:id/polls" component={UserPollsPageContainer}/>
        <LoginModal location={this.props.location}/>
      </div>
    );
  }
}
