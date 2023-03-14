'use strict';

/**
 * news-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-info.news-info');
