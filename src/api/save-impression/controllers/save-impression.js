'use strict';

/**
 * A set of functions called "actions" for `save-impression`
 */

module.exports = {
  getImpression: async (ctx, next) => {
    try {
      const req = ctx.request.body;
      // console.log(req);
      let reqid = req.userid;
      let id = req.news;
      // console.log(reqid);

      let findUid = await strapi.query('api::user-impression.user-impression').findOne({
        populate: ['news_infos'],
        where: { user_id: reqid },
      });


      if (findUid == null) {
        // console.log("In if---");
        // console.log(id);
        const entry = await strapi.entityService.create('api::user-impression.user-impression', {
          data: {
            user_id: reqid,
            news_infos: id
          },
        });
        ctx.body = entry;
      }
      else {
        let newsarr = findUid.news_infos;
        const uid = findUid.id;

        const obj = await strapi.query('api::news-info.news-info').findOne({
          where: { id: id }
        });
        newsarr.push(obj);
        const entry = await strapi.entityService.update('api::user-impression.user-impression', uid, {
          data: {
            news_infos: newsarr
          },
        });
        // console.log(entry);
        ctx.body = entry;
        // console.log(entry);
      }

    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  }
};
