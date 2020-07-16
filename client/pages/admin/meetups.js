import React from 'react';
import { PrivateRoute } from '../../hocs/PrivateRoute';
import api from '../../lib/api';

const AdminMeetups = () => {
  const { response, isLoading } = api('/events');

  return (
    <div className="top-div">
      <div className="meetups">
        <div className="meetups-child">
          <h1>Upcoming Meetups</h1>
          <div>
            {!isLoading &&
              response &&
              response.map((event) => {
                return (
                  <div className="single-meetup" key={event.meetupId}>
                    <div className="header">
                      <div>{event.date}</div>
                      <div>{event.name}</div>
                      <div>
                        <a
                          className="meetup-link"
                          href={event.link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Meetup
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute(AdminMeetups);
