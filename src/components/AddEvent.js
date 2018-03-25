import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventCity: '',
      eventCountry: 'CA',
      eventVenue: '',
      performanceDate: '',
      status: 'Add New Event'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
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
            <CountryDropdown
              value={this.state.eventCountry}
              onChange={this.selectCountry}
              valueType="short"
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
          <button onClick={this.addEvent}>{this.state.status}</button>
        </div>
      </div>
    );
  }
}

export default AddEvent;
