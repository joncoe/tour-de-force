import React, { Component } from 'react';

class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventCity: '',
      eventCountry: '',
      eventVenue: '',
      performanceDate: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
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
              {this.state.eventCountry}
              value={this.state.eventCountry}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="input-roup">
            <label>Venue</label>
            <input
              type="text"
              name="eventVenue"
              placeholder="Venue"
              value={this.state.eventVenue}
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
          <button onClick={this.addEvent}>Add New Event</button>
        </div>
      </div>
    );
  }
}

export default AddEvent;
