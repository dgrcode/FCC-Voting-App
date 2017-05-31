'use strict';

const cache = {};

module.exports = {
  set: function (key, item) {
    cache[key] = item;
  },
  get: function (key) {
    return cache[key];
  }
};
