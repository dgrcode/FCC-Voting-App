const mongo = require('mongodb');

const getPollInfo = (db, id) => new Promise((resolve, reject) => {
  db.collection('polls').find(
    {
      _id: new mongo.ObjectId('58bc3bd9d4351030bd9ac51e'),
    },
    {
      _id: 0,
      name: 1,
      dateCreated: 1,
      choices: 1,
    }
  ).toArray()
  .then((docs) => {
    console.log('finds something and sends it back with the promise');
    resolve(docs[0]);
  })
  .catch((err) => {
    console.log('Error finding the poll');
    reject(err);
  });
});

module.exports = getPollInfo;
