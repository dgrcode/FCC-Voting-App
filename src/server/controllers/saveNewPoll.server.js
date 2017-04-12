const saveNewPoll = (db, poll) => new Promise((resolve, reject) => {
  db.collection('polls').insertOne(poll)
  .then(() => resolve())
  .catch((err) => reject(err));
});

module.exports = saveNewPoll;
