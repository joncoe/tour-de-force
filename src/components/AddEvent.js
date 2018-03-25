import React, { Component } from 'react';
import axios from 'axios';

class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventCity: 'Toronto',
      eventCountry: 'Canada',
      venueName: 'Coda',
      performanceDate: '2018-06-06',
      status: 'Add New Event'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  selectCountry(val) {
    this.setState({ eventCountry: val });
  }

  addEvent(e) {
    e.preventDefault();
    const { eventCity, eventCountry, venueName, performanceDate } = this.state;
    axios
      .post('/addNewEvent', {
        eventCity,
        eventCountry,
        venueName,
        performanceDate
      })
      .then(() => {
        this.setState({ status: 'Event Added' });
      })
      .catch(err => {
        console.log(err.message);
        this.setState({ status: 'ERROR' });
      });
  }

  render() {
    return (
      <div>
        <h1>Add an Event</h1>
        <div className="form">
          <div className="input-roup">
            <label>City</label>
            <input
              type="text"
              name="eventCity"
              placeholder="City"
              value={this.state.eventCity}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="input-roup">
            <label>Country</label>
            <input
              type="text"
              name="eventCountry"
              placeholder="Country"
              value={this.state.eventCountry}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="input-roup">
            <label>Venue</label>
            <input
              type="text"
              name="venueName"
              placeholder="Venue"
              value={this.state.venueName}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="input-roup">
            <label>Event Date</label>
            <input
              type="date"
              name="performanceDate"
              placeholder="Performance Date"
              value={this.state.performanceDate}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <input
            type="submit"
            value={this.state.status}
            onClick={this.addEvent}
          />
        </div>
      </div>
    );
  }
}

export default AddEvent;
