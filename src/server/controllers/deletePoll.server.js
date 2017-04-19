const mongo = require('mongodb');

const getPollInfo = (db, id) => new Promise((resolve, reject) => {
  db.collection('polls').deleteOne({ _id: new mongo.ObjectId(id) })
  .then((deleteResult) => {
    if (deleteResult.result.n === 1) {
      resolve();
    } else {
      console.log('Something went wrong:');
      console.log(deleteResult.result);
      reject(new Error('Problem deleting a poll'));
    }
  })
  .catch((err) => {
    console.log('Error finding the poll');
    reject(err);
  });
});

module.exports = getPollInfo;
