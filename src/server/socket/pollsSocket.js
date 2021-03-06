const getPolls = require('../controllers/getPolls.server.js');
const pollsActions = require('../actions/pollsWsActions.js');

module.exports = {
  sendPolls: (ws, db) => {
    getPolls(db)
    .then((pollsObj) => {
      const pollsData = pollsActions.communicatePolls(pollsObj);
      ws.send(JSON.stringify(pollsData));
    })
    .catch((err) => {
      console.log(err);
    });
  },

  sendNewPollHold: (ws, poll) => {
    const pollData = pollsActions.communicateNewPollHold(poll);
    ws.send(JSON.stringify(pollData));
  },

  sendNewPoll: (ws, poll) => {
    const pollData = pollsActions.communicateNewPoll(poll);
    ws.send(JSON.stringify(pollData));
  },

  sendUpdatedPollHold: (ws, poll) => {
    const pollData = pollsActions.communicateUpdatedPollHold(poll);
    ws.send(JSON.stringify(pollData));
  },

  sendUpdatedPoll: (ws, poll) => {
    const pollData = pollsActions.communicateUpdatedPoll(poll);
    ws.send(JSON.stringify(pollData));
  },

  sendDeletePoll: (ws, pollId) => {
    const deleteData = pollsActions.communicateDeletePoll(pollId);
    console.log(deleteData);
    ws.send(JSON.stringify(deleteData));
  },

  sendVote: (ws, updateVote) => {
    ws.send(updateVote);
  }
};
