import React from 'react';

const Event = props => {
  const { city, country, venue, performanceDate } = props;

  return (
    <div className="event-detail">
      <p>
        City: <strong>{city}</strong>
      </p>
      <p>
        Country: <strong>{country}</strong>
      </p>
      <p>
        Venue: <strong>{venue}</strong>
      </p>
      <p>
        Date: <strong>{performanceDate}</strong>
      </p>
    </div>
  );
};

export default Event;
