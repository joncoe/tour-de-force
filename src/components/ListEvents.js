import React, { Component } from 'react';
import axios from 'axios';
import Event from './Event';

class ListEvents extends Component {
  constructor() {
    super();

    this.state = {
      eventList: []
    };
  }

  refresh() {
    axios
      .get('/event/all')
      .then(res => {
        if (res.data.payload) {
          console.log('set the state');
          this.setState({ eventList: res.data.payload });
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>List of Events</h1>
        {this.state.eventList.map((singleEvent, i) => {
          return (
            <Event
              city={singleEvent.eventCity}
              country={singleEvent.eventCountry}
              venue={singleEvent.venueName}
              performanceDate={singleEvent.performanceDate}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

export default ListEvents;
