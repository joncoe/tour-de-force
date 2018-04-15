import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SingleEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      singleEvent: null,
      returnToDashboard: false
    }

  }

  loadEvent() {
    const eventId = this.props.match.params.eventId;

    axios
      .get('/event', {
        params: {
          id: eventId
        }
      }).then(res => {
        if (res.data.payload) {
          this.setState({ singleEvent: res.data.payload });
        }
      }).catch(err => {
        console.log(err);
      })

  }

  componentDidMount() {
    this.loadEvent();
  }


  render() {

    let evt;

    if (this.state.singleEvent === null) {
      return <div>Loading</div>;
    } else {
      evt = this.state.singleEvent;
    }



    return (
      <div>
        <h1>Single Event</h1>
        City: {evt.eventCity}<br />
        Country: {evt.eventCountry}<br />
        Venue: {evt.venueName}<br />

        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    )

  }
}

export default SingleEvent;