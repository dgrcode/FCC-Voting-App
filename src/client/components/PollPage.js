'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { getPoll } from '../actions/connectionActions';
import { communicateTempVote } from '../actions/voteActions';
import EditButton from './EditButton';
import Chart from './Chart';

export default class PollPage extends React.Component {
  static propTypes = {
    polls: PropTypes.array.isRequired,
    tempVotes: PropTypes.object.isRequired,
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
      modified: false,
      poll: false,
      chosen: -1
    };
  }

  componentWillMount = () => {
    const poll = this.filterPolls(this.props.polls);
    if (poll) {
      this.setState({
        fetching: false,
        poll
      });
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
    const nextPoll = this.filterPolls(nextProps.polls);
    const prevPoll = this.state.poll;

    if (!nextPoll) {
      this.setState({ deleted: true });
    } else if (!prevPoll) {
      this.setState({ fetching: false, poll: nextPoll });
    } else if (nextPoll !== prevPoll) {
      // nextPoll could be modified, or just someone else voted
      const prevNames = [prevPoll.name, ...prevPoll.choices.map(val => val.choice)];
      const nextNames = [nextPoll.name, ...nextPoll.choices.map(val => val.choice)];
      let onlyVote = true;
      if (prevNames.length !== nextNames.length) {
        onlyVote = false;
      }
      for (let i = 0; i < prevNames.length; i++) {
        if (prevNames[i] !== nextNames[i]) {
          onlyVote = false;
        }
      }

      if (onlyVote === false) {
        this.modifiedPoll = nextPoll;
        this.setState({
          fetching: false,
          modified: true
        });
      } else {
        this.setState({
          poll: nextPoll
        });
      }
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
    this.setState({ modified: false, poll: this.modifiedPoll });
    this.modifiedPoll = undefined;
  }

  selectedChoice = (choiceId) => {
    const updatedChoices = this.state.poll.choices;
    const ws = this.props.ws;
    if (this.state.chosen !== -1) {
      const voteData = communicateTempVote(
        this.state.poll._id, this.state.chosen, -1);
      ws.send(JSON.stringify(voteData));
      updatedChoices[this.state.chosen].votes--;
    }
    if (this.state.chosen !== choiceId) {
      const voteData = communicateTempVote(this.state.poll._id, choiceId, 1);
      ws.send(JSON.stringify(voteData));
      updatedChoices[choiceId].votes++;
    } else {
      choiceId = -1;
    }
    const updatedPoll =
      Object.assign({}, this.state.poll, { choices: updatedChoices });
    this.setState({ poll: updatedPoll, chosen: choiceId });
  }

  render () {
    if (this.state.fetching) {
      return (<h2>Connecting...</h2>);
    }

    const poll = this.state.poll;
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
        <label>{props.choice}
          <input type="radio" name="choices"
            {...props.checked}
            onClick={props.handler}/>
        </label>
      </div>
    );

    const pollTempVotes = [];
    if (this.props.tempVotes.hasOwnProperty(poll._id)) {
      // This will get slow if a poll has more than 10000 choices. Not likely
      // to happen
      for (let ch = 0; ch < poll.choices.length; ch++) {
        pollTempVotes.push(
          this.props.tempVotes[poll._id]
            .reduce((acc, tmpv) => tmpv.choiceId === ch ? acc + tmpv.amount : acc, 0)
        );
      }
    }

    return (
      <div className="app-content">
        <h2>{poll.name}</h2>
        <NotificationDelete/>
        <NotificationModified/>
        <button className="btn btn-default">Share</button>
        <EditButton user={user} poll={poll}/>
        <div className="choices">
        {
          poll.choices.map((choice, id) =>
            <Choice key={id} choice={choice.choice}
              checked={this.state.chosen === id ? { checked: true } : {}}
              handler={this.selectedChoice.bind(this, id)}/>
          )
        }
        </div>
        <Chart
          votes={poll.choices.map((val, idx) => val.votes + (pollTempVotes[idx] || 0))}
          labels={poll.choices.map(val => val.choice)}
          selectedHandler={this.selectedChoice}
        />
      </div>
    );
  }
}
