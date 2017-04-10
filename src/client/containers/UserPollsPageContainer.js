'use strict';

import { connect } from 'react-redux';
import UserPollsPage from '../components/UserPollsPage';

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const UserPollsPageContainer = connect(
  mapStateToProps,
)(UserPollsPage);

export default UserPollsPageContainer;
