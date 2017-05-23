'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { getPoll } from '../actions/connectionActions';
import EditButton from './EditButton';

export default class PollPage extends React.Component {
  static propTypes = {
    polls: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    user: PropTypes.object,
    ws: PropTypes.instanceOf(WebSocket).isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      fetching: true,
      deleted: false,
      modified: false
    };
  }

  componentWillMount = () => {
    console.log('MONTA');
    const polls = this.props.polls;
    const match = this.props.match;
    const pollId = match.params.pollId;
    const poll = polls.reduce((accum, poll) => poll._id === pollId ? poll : accum, null);
    if (poll) {
      //const choiceNames = poll.choices.map(choice => choice.choice);
      this.setState({ fetching: false });
      this.originalPoll = poll;
    } else {
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
        } else {
          console.log(message);
        }
      };
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('RECEIVE PROPS');
    const polls = nextProps.polls;
    const match = nextProps.match;
    const pollId = match.params.pollId;
    const poll = polls.reduce((accum, poll) => poll._id === pollId ? poll : accum, null);
    console.log(poll !== this.originalPoll);
    if (!poll) {
      this.setState({ deleted: true });
    } else if (poll !== this.originalPoll) {
      this.modifiedPoll = poll;
      this.setState({ modified: true });
    }
  }

  updateView = () => {
    this.originalPoll = this.modifiedPoll;
    this.setState({ modified: false });
  }

  render () {
    if (this.state.fetching) {
      return (<h2>Connecting...</h2>);
    }

    const poll = this.originalPoll;
    const user = this.props.user;

    const NotificationDelete = () => {
      if (this.state.deleted) {
        return <h3>The poll has been deleted by the owner. Submissions will not be taken into account</h3>;
      }
      return null;
    };
    const NotificationModified = () => {
      if (this.state.modified) {
        return (
        <h3 onClick={this.updateView} role="button">
          The poll has been modified by the owner. Click here to update your view
        </h3>);
      }
      return null;
    };
    const Choice = (props) => (
      <div className="choice">
        <label>{props.choice}<input type="radio" name="choices"/></label>
      </div>
    );

    return (
      <div className="app-content">
        <h2>{poll.name}</h2>
        <NotificationDelete/>
        <NotificationModified/>
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
        <textarea value={JSON.stringify(this.state)}/>
      </div>
    );
  }
}
