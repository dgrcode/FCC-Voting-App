module.exports = {
  communicatePolls: (pollsObj) => ({
    type: 'COMM_POLLS',
    data: pollsObj,
    isAction: true
  }),

  communicateNewPollHold: (pollObj) => ({
    type: 'COMM_NEW_POLL_HOLD',
    data: pollObj,
    isAction: true
  }),

  communicateNewPoll: (pollObj) => ({
    type: 'COMM_NEW_POLL',
    data: pollObj,
    isAction: true
  })
};
