'use strict';

export const getPoll = (pollId) => ({
  type: 'GET_POLL',
  pollId,
  isAction: true
});
