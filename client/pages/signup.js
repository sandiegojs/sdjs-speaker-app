import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Signup = ({ events }) => {
  const [data, setData] = useState({
    speakerName: '',
    speakerEmail: '',
    speakerPhone: '',
    topic: '',
    description: '',
    eventId: '',
  });

  // Used for HTML5 form validation
  const form = useRef(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    setData({
      ...data,
      eventId: e.target.options[selectedIndex].getAttribute('data-key'),
    });
  };

  const register = async (e) => {
    if (form.current.checkValidity()) {
      e.preventDefault();

      await fetch(`${process.env.API_BASE_URL}/talks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          speaker_name: data.speakerName,
          speaker_email: data.speakerEmail,
          speaker_phone: data.speakerPhone,
          description: data.description,
          topic: data.topic,
          event_id: data.eventId,
        }),
      });
    }
  };

  return (
    <div className="signUp-container">
      <div className="form-container">
        <form ref={form}>
          <h3>Speaker Registration</h3>
          <div>
            <label htmlFor="speaker-name">Name: </label>
            <input
              name="speakerName"
              id="speakerName"
              onChange={handleChange}
              type="text"
              value={data.speakerName}
              required
            />
          </div>
          <div>
            <label htmlFor="speaker-email">Email: </label>
            <input
              type="email"
              id="speakerEmail"
              onChange={handleChange}
              name="speakerEmail"
              value={data.speakerEmail}
              required
            />
          </div>
          <div>
            <label htmlFor="speaker-phone">Phone Number: </label>
            <input
              type="tel"
              name="speakerPhone"
              id="speakerPhone"
              onChange={handleChange}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              format="### ### ####"
              value={data.speakerPhone}
              required
            />
            <small>Format: 123-456-7890</small>
          </div>
          <div>
            <label htmlFor="event">Event: </label>
            <select
              name="event"
              id="event"
              type="select"
              onChange={handleSelect}
              value={data.eventId}
              required
            >
              <option value="">Select an event</option>
              {events &&
                events
                  .sort((a, b) => {
                    return dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1;
                  })
                  .map((event) => {
                    const eventDate = dayjs(event.date).format('ddd, MMM DD');

                    return (
                      <option
                        key={event.id}
                        data-key={event.id}
                        value={event.id}
                      >
                        {event.name} - {eventDate}
                      </option>
                    );
                  })}
            </select>
          </div>
          <div>
            <label htmlFor="topic">Topic:</label>
            <input
              name="topic"
              id="topic"
              onChange={handleChange}
              type="text"
              value={data.topic}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              type="text"
              value={data.description}
              required
            />
          </div>
          <div>
            <button className="btn" id="speaker-submit" onClick={register}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Signup.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}/events`);
  const events = await response.json();

  return { events };
};

Signup.propTypes = {
  events: PropTypes.array,
};

export default Signup;
