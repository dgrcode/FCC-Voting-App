'use strict';

import React from 'react';
import { getPoll } from '../actions/connectionActions';
import EditButton from './EditButton';

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
        const message = getPoll(pollId);
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
        <label>{props.choice}<input type="radio" name="choices"/></label>
      </div>
    );

    return (
      <div className="app-content">
        <h2>{poll.name}</h2>
        <button className="btn btn-default">Share</button>
        <EditButton user={user} poll={poll}/>
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
