'use strict';

import { connect } from 'react-redux';
import VotesPending from '../components/VotesPending';

const mapStateToProps = (state) => {
  return {
    pendingVotes: state.votes.pending
  };
};

const VotesPendingContainer = connect(
  mapStateToProps
)(VotesPending);

export default VotesPendingContainer;
