'use strict';

export const communicateTempVote = (pollId, choiceId, amount) => ({
  type: 'COMM_TEMP_VOTE',
  payload: { pollId, choiceId, amount }
});
