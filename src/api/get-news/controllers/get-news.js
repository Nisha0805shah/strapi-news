'use strict';

/**
 * A set of functions called "actions" for `get-news`
 */

module.exports = {
  getNews: async (ctx, next) => {
    try {
      console.log("-------");
      const result = await strapi.db.query('api::news-info.news-info').findMany({
        // select : ['url'],
        _start: 1 > 0 ? (1 - 1) * 2 : 0,
        _limit: 2,

        orderBy: 'id',
      });
      console.log(result);
      ctx.body = result;
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  }
};
