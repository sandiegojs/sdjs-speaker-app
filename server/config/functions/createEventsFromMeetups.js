const axios = require('axios');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

module.exports = async () => {
	try {
		const meetups = await strapi.config.functions.getMeetups();

		meetups.forEach(async (meetup) => {
		  let event = await strapi.services.event.fetch({ meetupId: meetup.meetupId });

		  if (!event) {
			dayjs.extend(utc)
			dayjs.extend(timezone)

			event = await strapi.services.event.add({
				name: meetup.name,
				details: meetup.description,
				date: dayjs.tz(meetup.date, "America/Los_Angeles").toDate(),
				meetupId: meetup.meetupId,
			});
		  }
		});
	} catch (error) {
		new Error('createEventsFromMeetups failed')
	}
};
