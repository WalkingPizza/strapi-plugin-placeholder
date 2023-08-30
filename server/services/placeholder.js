'use strict';

const { getPlaiceholder } = require('plaiceholder');
const { getService } = require('../utils');

module.exports = ({ strapi }) => ({
  /**
   * Generates a base64 placeholder image for the given image.
   * @param {string} url a local or remote image URL to generate a placeholder for
   * @returns {Promise<string>} a base64 encoded placeholder image
   */

  async generate(url) {
    try {
      const settings = getService(strapi, 'settings').get();
      const { base64 } = await getPlaiceholder(url, settings);
      return base64;
    } catch (e) {
      if (e.code === 'ENOENT') {
        strapi.log.warn(`File "${url}" is missing!`)
      } else {
        strapi.log.error(e);
      }
      return null;
    }
  },
});
