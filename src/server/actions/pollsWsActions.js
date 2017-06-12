module.exports = {
  communicatePolls: (pollsObj) => ({
    type: 'COMM_POLLS',
    data: pollsObj
  }),

  communicateNewPollHold: (pollObj) => ({
    type: 'COMM_NEW_POLL_HOLD',
    data: pollObj
  }),

  communicateNewPoll: (pollObj) => ({
    type: 'COMM_NEW_POLL',
    data: pollObj
  }),

  communicateUpdatedPollHold: (pollObj) => ({
    type: 'COMM_UPDATED_POLL_HOLD',
    data: pollObj
  }),

  communicateUpdatedPoll: (pollObj) => ({
    type: 'COMM_UPDATED_POLL',
    data: pollObj
  }),

  communicateDeletePoll: (pollId) => ({
    type: 'COMM_DELETE_POLL',
    data: pollId
  })
};
