'use strict';
const urlMetadata = require('url-metadata')

/**
 * A set of functions called "actions" for `savemeta-data`
 */

module.exports = {
  fetchmetaData: async (ctx, next) => {
    try {
      // fetching data
      const reqData = ctx.request.body;
      // console.log(reqData);
      const url = reqData.url;
      console.log(url);
      const data  = await urlMetadata(url).then(
        async function (metadata) { 
          // console.log(metadata);
          const url = metadata.url;
          const image = metadata.image;
          const title = metadata.title;
          const author = metadata.author;
          const source = metadata.source;
          const keywords = metadata.keywords;
          const description = metadata.description;
          const entry = await strapi.entityService.create('api::news-info.news-info', {
            data: {
              url: url,
              image : image,
              title : title,
              author: author,
              source: source,
              keywords : keywords,
              description : description
            },
          });
          ctx.body = entry
        },
        async function (error) { 
          return error;
        })
    } catch (err) {
      return err;
    }
  }
};
