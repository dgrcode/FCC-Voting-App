'use strict';

import polls from './pollsReducer';
import user from './userReducer';
import votes from './votesReducer';

export default function appReducer (state = {}, action) {
  return {
    polls: polls(state.polls, action),
    user: user(state.user, action),
    votes: votes(state.votes, action)
  };
}
