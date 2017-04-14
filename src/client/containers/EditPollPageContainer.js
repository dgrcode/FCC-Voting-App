'use strict';

import { connect } from 'react-redux';
import EditPollPage from '../components/EditPollPage';

const mapStateToProps = (state, ownProps) => {
  return {
    polls: [...state.polls.visible, ...state.polls.hold],
    user: state.user,
    ws: ownProps.ws
  };
};

const EditPollPageContainer = connect(
  mapStateToProps,
)(EditPollPage);

export default EditPollPageContainer;
