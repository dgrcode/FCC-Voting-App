'use strict';

import polls from './pollsReducer';
import user from './userReducer';

export default function appReducer (state = {}, action) {
  return {
    polls: polls(state.polls, action),
    user: user(state.user, action)
  };
}
