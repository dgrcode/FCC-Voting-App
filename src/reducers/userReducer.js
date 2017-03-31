'use strict';

export default function pollsReducer (state = undefined, action) {
  switch (action.type) {
  case 'LOGIN':
    return action.user;
    break;
  case 'LOGOUT':
    return undefined;
    break;
  default:
    return state;
  }
}
