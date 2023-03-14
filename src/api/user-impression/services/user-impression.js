'use strict';

/**
 * user-impression service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-impression.user-impression');
