'use strict';

import { connect } from 'react-redux';
import NewPollPage from '../components/NewPollPage';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    user: state.user,
    ws: ownProps.ws
  };
};

const NewPollPageContainer = connect(
  mapStateToProps,
)(NewPollPage);

export default NewPollPageContainer;
