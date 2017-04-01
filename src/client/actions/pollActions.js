'use strict';

export const createPoll = (poll) => {
  console.log('llama a la acción');
  return {
    type: 'ADD_POLL',
    poll
  };
};
