'use strict';

import React from 'react';
import PollListItem from './PollListItem';

class PollsList extends React.Component {
  render () {
    const filterId = this.props.filterByUserId;
    const uId = this.props.user ? this.props.user._id : null;
    let polls = this.props.polls;
    if (filterId) {
      polls = polls.filter(poll => poll.owner === filterId);
    }

    return (
      <div>
      <ul>
      {
        polls.map((poll, id) => (
          <li key={id}><PollListItem poll={poll} uId={uId}/></li>
        ))
      }
      </ul>
      </div>
    );
  }
}

export default PollsList;
