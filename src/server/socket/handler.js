const wsUserManager = require('./wsUserManager.js');
const pollsSocket = require('./pollsSocket.js');

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

    const userId = wsUserManager.saveUser(ws);
    pollsSocket.sendPolls(ws, db);

    pollsSocket.sendPolls(userId, db);
    ws.on('message', (m) => {
      m = JSON.parse(m);
      switch (m.type) {
      case 'COMM_NEW_POLL':
        console.log('recive un nuevo poll');
        console.log(m.data);
        const newPoll = m.data;
        db.collection('polls').insertOne(newPoll)
        .then(() => {
          broadcastWithoutOriginator(pollsSocket.sendNewPollHold, ws, newPoll);
          pollsSocket.sendNewPoll(ws, newPoll);
        });
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
