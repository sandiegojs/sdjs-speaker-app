import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Signup = ({ meetups }) => {
  const [data, setData] = useState({
    speakerName: '',
    speakerEmail: '',
    speakerPhone: '',
    topic: '',
    description: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    setData({
      ...data,
      meetupId: e.target.options[selectedIndex].getAttribute('data-key'),
    });
  };

  const register = async (e) => {
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
        meetupId: data.meetupId,
      }),
    });
  };

  return (
    <div className="signUp-container">
      <div className="form-container">
        <form>
          <h3>Speaker Registration</h3>
          <div>
            <label htmlFor="speaker-name">Name: </label>
            <input
              name="speakerName"
              id="speakerName"
              onChange={handleChange}
              type="text"
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
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              format="### ### ####"
            />
          </div>
          <div>
            <label htmlFor="meetup">Meetup: </label>
            <select
              name="meetup"
              id="meetup"
              type="select"
              onChange={handleSelect}
              required
            >
              <option>Select a Meetup</option>
              {meetups &&
                meetups.map((event) => {
                  return (
                    <option key={event.meetupId} data-key={event.meetupId}>
                      {event.name}
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
  const events = await fetch(`${process.env.API_BASE_URL}/events`);
  const eventsData = await events.json();
  return { meetups: eventsData };
};

Signup.propTypes = {
  meetups: PropTypes.array,
};

export default Signup;
