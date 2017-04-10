'use strict';

import React from 'react';
import { getPoll } from '../actions/connectionActions';

export default class PollPage extends React.Component {
  render () {
    const polls = this.props.polls;
    const match = this.props.match;
    const pollId = match.params.pollId;
    const poll = polls.reduce((accum, poll) => poll._id === pollId ? poll : accum, null);
    if (!poll) {
      // TODO test this connection message
      const ws = this.props.ws;
      ws.onopen = () => {
        const message = getPoll();
        ws.send(JSON.stringify(message));
      };
      ws.onmessage = (mEvent) => {
        const message = JSON.parse(mEvent.data);
        if (message.isAction) {
          this.props.dispatch(message);
          // here it should update the polls in redux, and re-render this
          // component. At the second time, it should find the poll in the
          // redux store.
        }
      };
      return (<h2>Connecting...</h2>);
    }

    const user = this.props.user;

    const Choice = (props) => (
      <div className="choice">
        <label>{props.choice}<input type="checkbox"/></label>
      </div>
    );

    const EditButton = () => {
      if (user && poll.owner === user._id) {
        return <button className="btn btn-default">Edit</button>;
      }
      return null;
    };

    return (
      <div className="app-content">
        <h2>{poll.name}</h2>
        <button className="btn btn-default">Share</button>
        <EditButton/>
        <div className="choices">
        {
          poll.choices.map((choice, id) => <Choice key={id} choice={choice.choice}/>)
        }
        </div>
        <div className="chart">
        Chart will come here
        </div>
      </div>
    );
  }
}
