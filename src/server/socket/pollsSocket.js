const getPolls = require('../controllers/getPolls.server.js');
const wsUserManager = require('./wsUserManager.js');
const pollsActions = require('../actions/pollsWsActions.js');

module.exports = {
  sendPolls: (userId, db) => {
    getPolls(db)
    .then((pollsObj) => {
      const userWs = wsUserManager.getUser(userId);
      const pollsData = pollsActions.communicatePolls(pollsObj);
      userWs.send(JSON.stringify(pollsData));
    })
    .catch((err) => {
      console.log(err);
    });
  }
};
