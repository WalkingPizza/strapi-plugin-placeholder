'use strict';

const pluginId = require('./plugin-id');

/**
 * Checks whether the passed MIME type is supported by the plugin, hence whetehr a placeholder can be generated.
 * @param {string} mimeType the MIME type of the file we want to generate a placeholder for
 * @returns {boolean} whether a placeholder can be generated for the given MIME type
 */

const isValidMimeType = (mimeType) => mimeType.startsWith('image/');

/**
 * Helper that retrieves one of the available services of this plugin from Strapi.
 * @param {*} strapi the Strapi instance
 * @param {*} service the name of the service to retrieve
 * @returns the service
 */
const getService = (strapi, service) => strapi.plugin(pluginId).service(service);

module.exports = {
  isValidMimeType,
  getService,
};
