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

  case 'COMM_UPDATED_POLL':
    return {
      visible: state.visible.map(poll => poll._id === action.data._id ? action.data : poll),
      hold: state.hold
    };
    break;

  case 'COMM_UPDATED_POLL_HOLD':
    return {
      visible: state.visible.filter(poll => poll._id !== action.data._id),
      hold: [...state.hold.filter(poll => poll._id !== action.data._id), action.data]
    };
    break;

  default:
    return state;
  }
}
