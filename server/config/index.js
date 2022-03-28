'use strict';

const schema = require('./schema');

module.exports = {
  default: () => ({}),
  validator: async (config) => schema.validate(config),
};
