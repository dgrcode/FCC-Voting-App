const pollsSocket = require('./pollsSocket.js');
const saveNewPoll = require('../controllers/saveNewPoll.server.js');
const updatePoll = require('../controllers/updatePoll.server.js');

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

      // TODO handle the case 'GET_POLL', that is a user requesting a poll info

      default:
        // do nothing
        console.log('Recibe algo desconocido');
        Object.keys(m).map(val => console.log(val));
      }
    });

    // TODO handle disconnections
  });
};
