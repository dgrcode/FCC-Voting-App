'use strict';

import React from 'react';

export default class pollsOnHold extends React.Component {
  handleClick = () => {
    console.log('intenta ver los polls on hold');
    this.props.onClick();
  }

  render () {
    const pollsOnHold = this.props.polls;
    const amount = pollsOnHold.length;

    if (amount === 0) {
      return null;
    }

    return (
      <div onClick={this.handleClick} role="button">
      There {amount > 1 ? 'are' : 'is'} {amount} new poll{amount > 1 ? 's' : ''}
      </div>
    );
  }
}
