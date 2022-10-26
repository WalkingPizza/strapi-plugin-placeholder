'use strict';

const { getService, canGeneratePlaceholder } = require('./utils');

module.exports = ({ strapi }) => {
  /* Generate a placeholder when a new image is uploaded or updates */

  const generatePlaceholder = async (event) => {
    const { data, where } = event.params;
    if (!canGeneratePlaceholder(data)) return;
    let url = data.url || await getFileUrlById(where?.id)
    if (!url) return;
    data.placeholder = await getService(strapi, 'placeholder').generate(url);
  };

  /* The `beforeUpdate` lifecycle doesn’t have the file’s `url` attribute populated so we'll manually fetch it. */
  const getFileUrlById = async (id) => {
    if (!id) return
    const file = await strapi.service('plugin::upload.upload').findOne(id)
    return file?.url
  }

  strapi.db.lifecycles.subscribe({
    models: ['plugin::upload.file'],
    beforeCreate: generatePlaceholder,
    beforeUpdate: generatePlaceholder,
  });
};
