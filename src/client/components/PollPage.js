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
    const poll = this.filterPolls(this.props.polls);
    if (poll) {
      this.setState({ fetching: false });
      this.originalPoll = poll;
    } else {
      const ws = this.props.ws;
      const pollId = this.props.match.params.pollId;
      const message = getPoll(pollId);
      new Promise((resolve) => {
        const checkConnection = () => {
          setTimeout(() => {
            if (ws.readyState !== 1) {
              console.log('not connected yet');
              checkConnection();
            } else {
              resolve();
            }
          }, 500);
        };
        if (ws.readyState === 1) {
          resolve();
        } else {
          checkConnection();
        }
      })
      .then(() => {
        ws.send(JSON.stringify(message));
      });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const poll = this.filterPolls(nextProps.polls);
    if (!poll) {
      this.setState({ deleted: true });
    } else if (this.originalPoll === undefined) {
      this.setState({ fetching: false });
      this.originalPoll = poll;
    } else if (poll !== this.originalPoll) {
      this.modifiedPoll = poll;
      this.setState({ fetching: false, modified: true });
    }
  }

  filterPolls = (polls) => {
    const match = this.props.match;
    const pollId = match.params.pollId;
    let poll = polls.filter(poll => poll._id === pollId);
    poll = poll.length ? poll[0] : false;
    return poll;
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
