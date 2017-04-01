'use strict';

export default function pollsReducer (state = [], action) {
  switch (action.type) {
  case 'ADD_POLL':
    console.log('PREVIO');
    console.log(state);
    const newState = [...state, action.poll];
    console.log('POST');
    console.log(newState);
    return newState;
    break;
  case 'REMOVE_POLL':
    return state.filter((poll, idx) => idx !== action.pollIndex);
    break;
  default:
    return state;
  }
}
