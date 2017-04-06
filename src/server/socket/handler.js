const wsUserManager = require('./wsUserManager.js');
const pollsSocket = require('./pollsSocket.js');

module.exports = (app) => {
  const wss = app.wss;
  const db = app.db;

  wss.on('connection', (ws) => {
    console.log('New connection');

    const userId = wsUserManager.saveUser(ws);

    pollsSocket.sendPolls(userId, db);

    ws.on('message', (data) => {
      switch (data.type) {
      default:
        const _ = '';
      }
    });
  });
};
