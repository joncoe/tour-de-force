import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SingleEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      singleEvent: null,
      returnToDashboard: false
    }

    this.navigateToDashboard = this.navigateToDashboard.bind(this);

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

  backToDashboard = () => {
    // if (this.state.returnToDashboard) {
    //   return (<Redirect to="/dashboard" />);
    // }
  }

  navigateToDashboard = () => {
    this.setState({ returnToDashboard: true })
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

        <button onClick={this.navigateToDashboard()}>Back to Dashboard</button>
      </div>
    )

  }
}

export default SingleEvent;