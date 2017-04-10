'use strict';

import { connect } from 'react-redux';
import PollsList from '../components/PollsList';
import { createPoll } from '../actions/pollActions';

const mapStateToProps = (state, ownProps) => {
  return {
    polls: state.polls.visible,
    user: state.user,
    filterByUserId: ownProps.filterByUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      console.log('Crea nuevo poll');
      dispatch(createPoll('Nueva'));
    }
  };
};

const PollsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PollsList);

export default PollsListContainer;
