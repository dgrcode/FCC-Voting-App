'use strict';

const cache = {};

module.exports = {
  put: function (key, item) {
    cache[key] = item;
  },
  get: function (key) {
    return cache[key];
  }
};
