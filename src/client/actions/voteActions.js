'use strict';

export const communicateTempVote = (pollId, choiceId, amount) => ({
  type: 'COMM_TEMP_VOTE',
  payload: { pollId, choiceId, amount }
});

export const pendingVote = (pollId, choiceId) => {
  return ({
    type: 'PENDING_VOTE',
    payload: { pollId, choiceId }
  });
};
