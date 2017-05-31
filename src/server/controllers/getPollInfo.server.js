const mongo = require('mongodb');

const getPollInfo = (db, id) => new Promise((resolve, reject) => {
  db.collection('polls').find(
    {
      _id: new mongo.ObjectId(id)
    },
    {
      _id: 0,
      name: 1,
      dateCreated: 1,
      choices: 1
    }
  ).toArray()
  .then((docs) => {
    resolve(docs[0]);
  })
  .catch((err) => {
    console.log('Error finding the poll');
    reject(err);
  });
});

module.exports = getPollInfo;
