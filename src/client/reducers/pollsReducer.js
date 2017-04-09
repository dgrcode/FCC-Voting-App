'use strict';

const defaultPollState = { visible: [], hold: [] };

export default function pollsReducer (state = defaultPollState, action) {
  switch (action.type) {
  case 'ADD_POLL':
    return {
      visible: [action.poll, ...state.visible],
      hold: state.hold
    };
    break;

  case 'REMOVE_POLL':
    return {
      visible: state.visible.filter((poll, idx) => idx !== action.pollIndex),
      hold: state.hold
    };
    break;

  case 'COMM_POLLS':
    return {
      visible: [...action.data, ...state.visible],
      hold: state.hold
    };
    break;

  case 'COMM_NEW_POLL':
    return {
      visible: [action.data, ...state.visible],
      hold: state.hold
    };
    break;

  case 'COMM_NEW_POLL_HOLD':
    return {
      visible: state.visible,
      hold: [action.data, ...state.hold]
    };
    break;

  case 'SHOW_ON_HOLD_POLLS':
    return {
      visible: [...state.hold, ...state.visible],
      hold: []
    };
    break;

  default:
    return state;
  }
}
