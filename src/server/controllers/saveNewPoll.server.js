const saveNewPoll = (db, poll) => new Promise((resolve, reject) => {
  const pollObj = {
    name: poll.name,
    choices: poll.choices,
    dateCreated: new Date(),
    lastModified: new Date(),
    owner: poll.owner
  };
  db.collection('polls').insertOne(pollObj)
  .then((result) => {
    pollObj._id = result.insertedId;
    resolve(pollObj);
  })
  .catch((err) => reject(err));
});

module.exports = saveNewPoll;
