'use strict';

import React from 'react';
import NewChoiceInput from './NewChoiceInput';
import PropTypes from 'prop-types';
import { getPoll } from '../actions/connectionActions';
import { communicateUpdatedPoll } from '../actions/pollActions';

export default class EditPollPage extends React.Component {
  static propTypes = {
    polls: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired
    }),
    user: PropTypes.object,
    ws: PropTypes.instanceOf(WebSocket).isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      choices: [''],
      fetching: true
    };
  }

  componentWillMount = () => {
    const polls = this.props.polls;
    const match = this.props.match;
    const pollId = match.params.pollId;
    const poll = polls.reduce((accum, poll) => poll._id === pollId ? poll : accum, null);
    if (poll) {
      //const choiceNames = poll.choices.map(choice => choice.choice);
      this.setState({ name: poll.name, choices: poll.choices, fetching: false });
      this.originalPoll = poll;
    } else {
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
    }
  }

  handleTitleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  updateInput = (value, index) => {
    this.setState({
      choices: this.state.choices.map((v, i) => i === index ? { ...v, choice: value } : v)
    });
  }

  addNewChoice = () => {
    this.setState({ choices: [...this.state.choices, { choice: '', votes: 0 }] });
  }

  deleteChoice = (idx) => {
    console.log('Se carga los votos');
    this.setState({ choices: this.state.choices.filter((v, i) => i !== idx) });
  }

  saveChanges = () => {
    // TODO check if the originalPoll is different than te current one.
    // Now it just overwrites it
    const updatedPoll = {
      name: this.state.name,
      choices: this.state.choices,
      dateCreated: this.originalPoll.dateCreated,
      owner: this.props.user._id,
      _id: this.originalPoll._id
    };
    const updatedPollData = communicateUpdatedPoll(updatedPoll);
    console.log(updatedPollData);
    this.props.ws.send(JSON.stringify(updatedPollData));
    this.props.history.push('/');
  }

  render () {
    if (this.state.fetching) {
      return (<h2>Connecting...</h2>);
    }

    const poll = this.originalPoll;
    const user = this.props.user;

    if (poll.owner !== user._id) {
      return (<h2>Not allowed</h2>);
    }

    return (
      <div className="app-root">
        <h1>{poll.name}</h1>
        <label>
          Title:
          <input type="text" value={this.state.name}
            onChange={this.handleTitleChange}
          />
        </label>
        <h4>Options:</h4>
        <button className="btn" onClick={this.addNewChoice}>New choice</button>
        <br/>
        {
          this.state.choices.map((choice, idx) => (
            <NewChoiceInput key={idx} idx={idx} val={this.state.choices[idx].choice}
              updateInput={this.updateInput} deleteChoice={this.deleteChoice}
            />
          ))
        }
        <br/>
        <button className="btn btn-info" onClick={this.saveChanges}>Save</button>
        <button className="btn btn-default" onClick={history.goBack}>Cancel</button>
        <br/>
        <textarea value={JSON.stringify(this.state, 4)}/>
      </div>
    );
  }
}
