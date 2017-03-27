const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;
MongoClient.connect('mongodb://localhost:27017/votingapp')
.then((db) => {
  let dummyPoll = {
    name: 'Test poll',
    choices: [
      { choice: 'option 1', votes: 3 },
      { choice: 'option 2', votes: 5 },
      { choice: 'option 3', votes: 9 }
    ],
    dateCreated: new Date()
  };
  db.collection('polls').insertOne(dummyPoll);
  db.close();
})
.catch((err) => {
  console.log('Error connecting to the DB for seeding.');
  console.log(err);
});
