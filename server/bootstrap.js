'use strict';

const { getService, isValidMimeType } = require('./utils');

module.exports = ({ strapi }) => {
  /* Generate a placeholder when a new image is uploaded */

  strapi.db.lifecycles.subscribe({
    models: ['plugin::upload.file'],
    async beforeCreate(event) {
      const { data } = event.params;
      if (!isValidMimeType(data.mime)) return;
      data.placeholder = await getService(strapi, 'placeholder').generate(data.url);
    },
  });
};
