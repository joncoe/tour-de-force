import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventCity: '',
      eventCountry: '',
      venueName: '',
      performanceDate: '',
      status: 'Edit this event',
      success: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.addAnotherEvent = this.addAnotherEvent.bind(this);
  }


  loadEvent() {
    const eventId = this.props.match.params.eventId;

    // console.log(this.props.match.params);

    axios
      .get('/event', {
        params: {
          id: eventId
        }
      }).then(res => {
        console.log(res.data.payload);
        if (res.data.payload) {
          const obj = res.data.payload;
          this.setState({
            eventCity: obj.eventCity,
            eventCountry: obj.eventCountry,
            venueName: obj.venueName,
            performanceDate: obj.performanceDate
          });
        }
      }).catch(err => {
        console.log(err);
      })

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

  editEvent(e) {
    e.preventDefault();
    const {
      eventCity,
      eventCountry,
      venueName,
      performanceDate,
      userId
    } = this.state;
    axios
      .patch('/event/edit', {
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

    this.loadEvent();
  }

  render() {
    if (!this.state.success) {
      return (
        <div>
          <h1>Edit this event</h1>
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
              onClick={this.editEvent}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Event has been changed!</h2>
          <button>
            <Link to={{ pathname: '/dashboard' }}>Back to Dashboard</Link>
          </button>
        </div>
      );
    }
  }
}

export default EditEvent;
