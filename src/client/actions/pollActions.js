'use strict';

export const createPoll = (poll) => {
  console.log('llama a la acción');
  return {
    type: 'ADD_POLL',
    poll
  };
};
export const communicateNewPoll = (poll) => ({
  type: 'COMM_NEW_POLL',
  data: poll,
  isAction: true
});

export const showOnHoldPolls = () => ({
  type: 'SHOW_ON_HOLD_POLLS'
});
