'use strict';

export const createPoll = (pollTitle) => {
  console.log('llama a la acción');
  return {
    type: 'ADD_POLL',
    pollTitle
  };
};
