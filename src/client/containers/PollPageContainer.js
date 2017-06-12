'use strict';

import { connect } from 'react-redux';
import PollPage from '../components/PollPage';

const mapStateToProps = (state, ownProps) => {
  return {
    polls: [...state.polls.visible, ...state.polls.hold],
    tempVotes: state.votes.temp,
    user: state.user,
    ws: ownProps.ws
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => dispatch(action)
  };
};

const PollPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PollPage);

export default PollPageContainer;
