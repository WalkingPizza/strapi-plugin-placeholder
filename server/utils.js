'use strict';

const pluginId = require('./plugin-id');
const mimeTypes = require('mime-types');

/**
 * Checks whether the passed file has a MIME type that is supported by the plugin, hence whether a placeholder can be generated.
 * @param {string} file the file we want to generate a placeholder for
 * @returns {boolean} whether a placeholder can be generated for the given file
 */

const canGeneratePlaceholder = (file) => {
  if (!file.mime) {
    // Only lookup the mime if file lacks the prop.
    const lookedUpMime = mimeTypes.lookup(file.name);
    if(lookedUpMime) { // lookedUpMime can return false if it failed to match
      file.mime = lookedUpMime;
    }
  }

  return file.mime?.startsWith('image/') && file.url;
};

/**
 * Helper that retrieves one of the available services of this plugin from Strapi.
 * @param {*} strapi the Strapi instance
 * @param {*} service the name of the service to retrieve
 * @returns the service
 */
const getService = (strapi, service) => strapi.plugin(pluginId).service(service);

module.exports = {
  canGeneratePlaceholder,
  getService,
};
