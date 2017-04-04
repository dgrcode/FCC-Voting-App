'use strict';

import React from 'react';

export default class PollPage extends React.Component {
  render () {
    console.log('Pinta el Poll');

    const match = this.props.match;
    const id = match.params.pollid;

    return (
      <div className="app-content">
        <h1>El id es {id}</h1>
      </div>
    );
  }
}
