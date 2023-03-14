'use strict';

const { fetchLogin } = require("../services/login-validation");

/**
 * A set of functions called "actions" for `loginValidation`
 */

  module.exports = {
    async fetchLogin(ctx, next) {
      try {
        const data = await strapi
          .service("api::login-validation.login-validation")
          .fetchLogin();
        console.log(data, "data");
  
        ctx.body = data;
      } catch (err) {
        ctx.badRequest("Post report controller error", { moreDetails: err });
      }
    },
  };
