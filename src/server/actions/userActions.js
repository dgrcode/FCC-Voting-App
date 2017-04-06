module.exports = {
  communicateUserData: (userData) => ({
    type: 'COMM_USER_DATA',
    data: userData,
    isAction: true
  })
};
