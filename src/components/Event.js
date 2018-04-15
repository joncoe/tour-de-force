import React, { Component } from 'react';
import moment from 'moment';

class Event extends Component {
  constructor(props) {
    super(props);

    this.formatDate = this.formatDate.bind(this);

  }

  formatDate() {
    return moment(this.props.performanceDate).format("MMM Do YY");
  }

  render() {
    return (
      <div className="event-detail" >
        <p>
          City: <strong>{this.props.city}</strong><br />
          Venue: <strong>{this.props.venue}</strong><br />
          Date: <strong>{this.formatDate()}</strong>
        </p>
      </div>
    );
  }
};

export default Event;
