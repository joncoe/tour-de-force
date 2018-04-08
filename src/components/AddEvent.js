import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventCity: '',
      eventCountry: '',
      venueName: '',
      performanceDate: '',
      status: 'Add New Event',
      success: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.addAnotherEvent = this.addAnotherEvent.bind(this);
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
    const {
      eventCity,
      eventCountry,
      venueName,
      performanceDate,
      userId
    } = this.state;
    axios
      .post('/event/add', {
        eventCity,
        eventCountry,
        venueName,
        performanceDate,
        userId
      })
      .then(() => {
        this.setState({ status: 'Event Added', success: true });
      })
      .catch(err => {
        console.log(err.message);
        this.setState({ status: 'ERROR' });
      });
  }

  addAnotherEvent() {
    this.setState({
      eventCity: '',
      eventCountry: '',
      venueName: '',
      performanceDate: '',
      status: 'Add New Event',
      success: false
    });
  }

  componentDidMount() {
    this.setState({
      userId: this.props.appUser._id
    });
  }

  render() {
    if (!this.state.success) {
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
    } else {
      return (
        <div>
          <h2>Successfully added!</h2>
          <button onClick={this.addAnotherEvent}>Add Another Event</button>
          <button>
            <Link to={{ pathname: '/dashboard' }}>Back to Dashboard</Link>
          </button>
        </div>
      );
    }
  }
}

export default AddEvent;
