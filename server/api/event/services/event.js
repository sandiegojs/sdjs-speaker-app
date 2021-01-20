'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    async fetch(params) {
        return strapi.query('event').findOne(params);
    },

    async add(values) {
        return strapi.query('event').create(values);
    }
};
