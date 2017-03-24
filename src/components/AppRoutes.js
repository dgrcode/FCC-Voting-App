'use strict';

import React from 'react';
import { Switch, Route, Router, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import Layout from './Layout'
import IndexPage from './IndexPage';
import InfoPage from './InfoPage';
import Poll from './Poll'

const history = createBrowserHistory();

export default class AppRoutes extends React.Component {
  render() {

    return (
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="poll/:id" component={Poll}/>
      </Route>
      </Router>
    );
  }
}
