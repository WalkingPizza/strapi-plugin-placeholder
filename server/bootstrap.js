'use strict';

const { getService, isValidMimeType } = require('./utils');

module.exports = ({ strapi }) => {
  /* Generate a placeholder when a new image is uploaded or updates */

  const generatePlaceholder = async (event) => {
    const { data } = event.params;
    if (!isValidMimeType(data.mime)) return;
    data.placeholder = await getService(strapi, 'placeholder').generate(data.url);
  };

  strapi.db.lifecycles.subscribe({
    models: ['plugin::upload.file'],
    beforeCreate: generatePlaceholder,
    beforeUpdate: generatePlaceholder,
  });
};
