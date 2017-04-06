module.exports = {
  communicateUserData: (userData) => ({
    type: 'COMM_USER_INFO',
    data: userData,
    isAction: true
  })
};
