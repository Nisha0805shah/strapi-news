'use strict';

const getNews = require("../controllers/get-news");

/**
 * get-news service
 */

module.exports = {
    async getNews(ctx, next) {
      try {
        const data = await strapi
          .service("api::get-news.get-news")
          .getNews();
          console.log(data, "data");
  
        // ctx.body = data;
      } catch (err) {
        ctx.badRequest("Post report controller error", { moreDetails: err });
      }
    },
  };