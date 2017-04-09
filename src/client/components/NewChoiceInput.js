'use strict';

import React from 'react';

export default class PollPage extends React.Component {
  handleChange = (e) => {
    const idx = this.props.idx;
    const val = e.target.value;
    this.props.updateInput(val, idx);
  }

  handleClick = () => {
    this.props.deleteChoice(this.props.idx);
  }

  render () {
    return (
      <div className="new-choice">
        <input type="text" value={this.props.val} onChange={this.handleChange}/>
        <span className="glyphicon glyphicon-remove" onClick={this.handleClick}
          aria-hidden="true" role="button"
        />
      </div>
    );
  }
}
