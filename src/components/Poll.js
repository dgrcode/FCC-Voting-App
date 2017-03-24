'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
//import NotFoundPage from './NotFoundPage';


export default class Poll extends React.Component {
  render() {
    console.log('Pinta el Poll');

    return (
      <div className="app-content-root">
        <h1>{this.props.params.id}</h1>
      </div>
    );
  }
}
