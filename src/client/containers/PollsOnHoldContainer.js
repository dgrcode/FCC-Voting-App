'use strict';

import { connect } from 'react-redux';
import PollsOnHold from '../components/PollsOnHold';
import { showOnHoldPolls } from '../actions/pollActions';

const mapStateToProps = (state) => {
  return {
    polls: state.polls.hold
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      console.log('saca los polls on hold');
      dispatch(showOnHoldPolls());
    }
  };
};

const PollsOnHoldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PollsOnHold);

export default PollsOnHoldContainer;
