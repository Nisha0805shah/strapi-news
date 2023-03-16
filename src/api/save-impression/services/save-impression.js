'use strict';

const { getImpression } = require("../controllers/save-impression");

/**
 * save-impression service
 */

module.exports = {
    async getImpression(ctx, next) {
      try {
        const data = await strapi
          .service("api::save-impression.save-impression")
          .getImpression();
          console.log(data, "data");
  
        // ctx.body = data;
      } catch (err) {
        ctx.badRequest("Post report controller error", { moreDetails: err });
      }
    },
  };
