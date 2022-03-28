'use strict';

const pluginName = require('../plugin-name');

module.exports = ({ strapi }) => ({
  /**
   * Helper that returns the plugin settings.
   * @returns {Object} the settings of the plugin
   */

  get: () => strapi.config.get(`plugin.${pluginName}`),

  /**
   * Helper that sets the plugin settings and returns them.
   * @param {Object} settings the desired settings for the plugin
   * @param {number} settings.size the desired size of the placeholder
   * @returns {Object} the new settings for the plugin
   */

  set: (settings) => strapi.config.set(`plugin.${pluginName}`, settings),
});
