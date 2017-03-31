const findUser = (db, userInfo) => new Promise((resolve, reject) => {
  const listOfMails = userInfo.emails.map((val) => val.value);
  const providerIdObject = {};
  providerIdObject['ids.' + userInfo.provider] = userInfo.id;
  db.collection('users').find({ $or: [
    { email: { $in: listOfMails } },
    providerIdObject
  ] }).toArray()
  .then((docs) => {
    if (docs.length === 0) {
      console.log('This is a new user');
      resolve(null);
    }
    if (docs.length > 1) {
      console.log('There is more than one account for the same user. Check it');
      console.log(userInfo);
    }
    resolve(docs[0]);
  })
  .catch((err) => {
    reject(err);
  });
});

module.exports = findUser;
