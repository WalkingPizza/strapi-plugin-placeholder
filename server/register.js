'use strict';

module.exports = ({ strapi }) => {
  if (!strapi.plugin('upload'))
    return strapi.log.warn("Upload plugin is not installed, Plaiceholder won't be started.");

  /* Update the Media Library File content type, adding the placeholder field */
  strapi.plugin('upload').contentTypes.file.attributes.placeholder = {
    type: 'text',
  };
};
