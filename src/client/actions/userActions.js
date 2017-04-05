'use strict';

export const userLogin = (user) => {
  return {
    type: 'LOGIN',
    user
  };
};

export const userLogout = () => {
  return {
    type: 'LOGOUT'
  };
};
