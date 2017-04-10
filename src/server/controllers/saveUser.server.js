const saveUser = (db, userInfo) => new Promise((resolve, reject) => {
  db.collection('users').insertOne(userInfo)
  .then((result) => {
    resolve(result.ops[0]);
  })
  .catch((err) => {
    reject(err);
  });
});

module.exports = saveUser;
