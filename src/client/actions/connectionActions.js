'use strict';

export const getPoll = (pollId) => ({
  type: 'COMM_GET_POLL',
  pollId
});
