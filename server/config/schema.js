'use strict';

const yup = require('yup');

module.exports = yup.object().shape({
  size: yup.number().min(4).max(64),
});
