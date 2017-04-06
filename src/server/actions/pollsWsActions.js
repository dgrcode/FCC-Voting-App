module.exports = {
  communicatePolls: (pollsObj) => ({
    type: 'COMM_POLLS',
    data: pollsObj,
    isAction: true
  })
};
