'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Every 10 minutes.
   */
  '*/10 * * * *': async () => {
    try {
      await strapi.config.functions.createEventsFromMeetups();
    } catch(error) {
      console.log(errpr)
    }
  }
};
