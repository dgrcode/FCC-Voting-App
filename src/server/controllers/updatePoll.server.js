const mongo = require('mongodb');

const updatePoll = (db, poll) => new Promise((resolve, reject) => {
  const updatedPoll = {
    name: poll.name,
    choices: poll.choices,
    dateCreated: poll.dateCreated,
    lastModified: new Date(),
    owner: poll.owner
  };
  db.collection('polls').updateOne({ _id: new mongo.ObjectId(poll._id) }, updatedPoll)
  .then((result) => {
    if (result.modifiedCount === 0) {
      console.warn('updatePoll didn\'t modify any document');
    }
    updatedPoll._id = poll._id;
    resolve(updatedPoll);
  })
  .catch((err) => reject(err));
});

module.exports = updatePoll;
