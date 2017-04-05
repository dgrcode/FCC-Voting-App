'use strict';

import { connect } from 'react-redux';
import UserOptions from '../components/UserOptions';
import { userLogout } from '../actions/userActions';

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      console.log('Logging out');
      dispatch(userLogout());
    }
  };
};

const UserOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOptions);

export default UserOptionsContainer;
