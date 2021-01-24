'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const formatError = error => [
    { messages: [{ id: error.id, message: error.message, field: error.field }] },
];

module.exports = {
    async create(ctx) {
        const {
            description,
            event_id,
            speaker_email,
            speaker_name,
            speaker_phone,
            topic
        } = ctx.request.body

        if (!description) return ctx.badRequest('missing.description');
        if (!event_id) return ctx.badRequest('missing.event_id');
        if (!speaker_email) return ctx.badRequest('missing.speaker_email');
        if (!speaker_name) return ctx.badRequest('missing.speaker_name');
        if (!speaker_phone) return ctx.badRequest('missing.speaker_phone');
        if (!topic) return ctx.badRequest('missing.topic');

        try {
            let user = await strapi.plugins['users-permissions'].services.user.fetch({ email: speaker_email });
            if (!user) {
                const role = await strapi.query('role', 'users-permissions').findOne({ type: 'speaker' }, []);

                user = await strapi.plugins['users-permissions'].services.user.add({
                    username: speaker_email,
                    name: speaker_name,
                    email: speaker_email,
                    phone: speaker_phone,
                    password: 'zzzzzz',
                    provider: 'local',
                    role: role,
                });
            }

            let event = await strapi.services.event.fetch({ id: event_id });
            if (!event) {
                throw Error('Event not found.')
            }

            const talk = await strapi.services.talk.add({
                status: 'Pending',
                description: description,
                topic: topic,
                owner: user,
                event: event,
            });

            ctx.created(talk);
        } catch (error) {
            ctx.badRequest(formatError(error));
        }
    },
};
