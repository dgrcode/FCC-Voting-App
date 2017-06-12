const pollsSocket = require('./pollsSocket.js');
const saveNewPoll = require('../controllers/saveNewPoll.server.js');
const updatePoll = require('../controllers/updatePoll.server.js');
const deletePoll = require('../controllers/deletePoll.server.js');
const getPollInfo = require('../controllers/getPollInfo.server.js');
const pollsWsActions = require('../actions/pollsWsActions.js');

module.exports = (app) => {
  const wss = app.wss;
  const db = app.db;

  const broadcastWithoutOriginator = (callback, originWs, message) =>
    wss.clients
    .forEach(ws => ws !== originWs ? callback(ws, message) : '');

  const broadcastAll = (callback, message) =>
    broadcastWithoutOriginator(callback, null, message);

  wss.on('connection', (ws) => {
    console.log('New connection');

    pollsSocket.sendPolls(ws, db);

    ws.on('message', (m) => {
      m = JSON.parse(m);
      console.log('NEW action.type:', m.type);
      switch (m.type) {
      case 'COMM_NEW_POLL':
        console.log('Recibe un nuevo poll');
        console.log(m.data);
        const newPoll = m.data;
        saveNewPoll(db, newPoll)
        .then((insertedPoll) => {
          broadcastWithoutOriginator(pollsSocket.sendNewPollHold, ws, insertedPoll);
          pollsSocket.sendNewPoll(ws, insertedPoll);
        });
        break;

      // TODO handle the case 'GET_POLL', that is a user requesting a poll info

      case 'COMM_UPDATED_POLL':
        console.log('Recibe cambios en el poll "' + m.data.name + '"');
        console.log(JSON.stringify(m.data), 2);
        const updatedPoll = m.data;
        updatePoll(db, updatedPoll)
        .then((updatedPollDb) => {
          broadcastWithoutOriginator(pollsSocket.sendUpdatedPollHold, ws, updatedPollDb);
          pollsSocket.sendUpdatedPoll(ws, updatedPollDb);
        });
        break;

      case 'COMM_DELETE_POLL':
        console.log('Borra el poll con id: ' + m.data);
        const pollId = m.data;
        deletePoll(db, pollId)
        .then(() => {
          broadcastAll(pollsSocket.sendDeletePoll, pollId);
        })
        .catch(err => console.log(err));
        break;

      case 'COMM_GET_POLL':
        console.log('Request to get the poll with id', m.pollId);
        getPollInfo(db, m.pollId)
        .then(poll => {
          console.log('Get the poll with id', m.pollId);
          const pollAction = pollsWsActions.communicateNewPoll(poll);
          ws.send(JSON.stringify(pollAction));
        })
        .catch(err => console.log(err));
        break;

      case 'COMM_TEMP_VOTE':
        // TODO I could filter and send this information only to the people
        // looking at the specific poll, at m.payload.pollId. To implement this
        // I need to send to the server where is each client when they enter
        // in a new poll page.
        broadcastWithoutOriginator(pollsSocket.sendVote, ws, JSON.stringify(m));
        break;

      default:
        // do nothing
        console.log('Recibe algo desconocido');
        Object.keys(m).map(val => console.log(val));
      }
    });

    // TODO handle disconnections
  });
};
