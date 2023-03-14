'use strict';

/**
 * loginValidation service
 */

module.exports = {
    fetchLogin: async () => {
      try {
        // fetching data
        const entries = await strapi.entityService.findMany(
          "api::login.login",
          {
            fields: ["email_id", "createdAt"]
          }
        );
        return entries;
      } catch (err) {
        return err;
      }
    },
  };
