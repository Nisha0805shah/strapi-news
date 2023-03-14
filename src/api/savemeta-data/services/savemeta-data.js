'use strict';

const { fetchmetaData } = require("../controllers/savemeta-data");

/**
 * savemeta-data service
 */

module.exports = {
    async fetchmetaData(ctx, next) {
      try {
        const data = await strapi
          .service("api::savemeta-data.savemeta-data")
          .fetchmetaData();
          console.log(data, "data");
  
        // ctx.body = data;
      } catch (err) {
        ctx.badRequest("Post report controller error", { moreDetails: err });
      }
    },
  };

