import React, { Component } from 'react';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import ListEvents from './ListEvents';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Logout setUser={this.props.setUser} />
        <button>
          <Link to={{ pathname: '/add-event' }}>New Event</Link>
        </button>

        <div className="listEvents">
          <ListEvents userId={this.props.user._id} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
