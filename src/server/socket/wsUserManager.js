const users = { currentUsers: 0, currentId: 0 };

const generateNewUnkownId = () => {
  const id = 'u' + users.currentId;
  users.currentId++;
  return id;
};

module.exports = {
  saveUser: (wsConnection) => {
    const userId = generateNewUnkownId();
    users[userId] = wsConnection;
    users.currentUsers++;
    return userId;
  },

  getUser: (id) => users[id],

  deleteUser: (id) => {
    Reflect.deleteProperty(users, id);
  }
};
