'use strict';

import React from 'react';
import Navbar from './Navbar';


export default class IndexPage extends React.Component {
  render() {
    const user = this.props.user;
    console.log('Pinta el Layout');

    return (
      <div className="app-root">
        <Navbar user={user}/>
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}
