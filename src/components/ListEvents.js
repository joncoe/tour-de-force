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
    const userId = this.props.userId;
    // console.log('user id is: ', userId);
    axios
      .get(`/event/all/`, {
        params: {
          userId: userId

        }
      })
      .then(res => {
        if (res.data.payload) {
          // console.log(res.data.payload);
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
    // console.log('render');
    return (
      <div>
        <h4>List of Events</h4>
        {this.state.eventList.map((singleEvent, i) => {
          return (
            <Event
              city={singleEvent.eventCity}
              country={singleEvent.eventCountry}
              venue={singleEvent.venueName}
              performanceDate={singleEvent.performanceDate}
              key={i}
              eventId={singleEvent._id}
              userId={this.props.userId}
            />
          );
        })}
      </div>
    );
  }
}

export default ListEvents;
