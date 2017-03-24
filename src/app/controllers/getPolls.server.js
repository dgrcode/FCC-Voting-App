const getPolls = (db) => new Promise((resolve, reject) => {
  db.collection('polls').find({}).toArray()
  .then((docs) => {
    resolve(docs);
  })
  .catch((err) => {
    reject(err);
  });
});

module.exports = getPolls;
