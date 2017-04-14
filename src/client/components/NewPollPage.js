'use strict';

import React from 'react';
import NewChoiceInput from './NewChoiceInput';
import { communicateNewPoll } from '../actions/pollActions';

export default class NewPollPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      choices: ['']
    };
  }

  handleTitleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  updateInput = (value, index) => {
    this.setState({
      choices: this.state.choices.map((v, i) => i === index ? value : v)
    });
  }

  addNewChoice = () => {
    this.setState({ choices: [...this.state.choices, ''] });
  }

  deleteChoice = (idx) => {
    this.setState({ choices: this.state.choices.filter((v, i) => i !== idx) });
  }

  submitPoll = () => {
    const newPoll = {
      name: this.state.name,
      choices: this.state.choices.map(val => ({ choice: val, votes: 0 })),
      // dateCreated is set by the server
      owner: this.props.user._id
    };
    const newPollData = communicateNewPoll(newPoll);
    this.props.ws.send(JSON.stringify(newPollData));
    this.props.history.push('/');
  }

  render () {
    return (
      <div className="app-root">
        <h1>New Poll</h1>
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
            <NewChoiceInput key={idx} idx={idx} val={this.state.choices[idx]}
              updateInput={this.updateInput} deleteChoice={this.deleteChoice}
            />
          ))
        }
        <br/>
        <button className="btn btn-info" onClick={this.submitPoll}>Submit</button>
      </div>
    );
  }
}
