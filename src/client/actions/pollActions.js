'use strict';

export const createPoll = (poll) => ({
  type: 'ADD_POLL',
  poll
});

export const communicateNewPoll = (poll) => ({
  type: 'COMM_NEW_POLL',
  data: poll
});

export const communicateUpdatedPoll = (poll) => ({
  type: 'COMM_UPDATED_POLL',
  data: poll
});

export const communicateDeletePoll = (pollId) => ({
  type: 'COMM_DELETE_POLL',
  data: pollId
});

export const showOnHoldPolls = () => ({
  type: 'SHOW_ON_HOLD_POLLS'
});
