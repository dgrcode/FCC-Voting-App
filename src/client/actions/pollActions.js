'use strict';

export const createPoll = (poll) => ({
  type: 'ADD_POLL',
  poll
});

export const communicateNewPoll = (poll) => ({
  type: 'COMM_NEW_POLL',
  data: poll,
  isAction: true
});

export const communicateUpdatedPoll = (poll) => ({
  type: 'COMM_UPDATED_POLL',
  data: poll,
  isAction: true
});

export const communicateDeletePoll = (pollId) => ({
  type: 'COMM_DELETE_POLL',
  data: pollId,
  isAction: true
});

export const showOnHoldPolls = () => ({
  type: 'SHOW_ON_HOLD_POLLS'
});
