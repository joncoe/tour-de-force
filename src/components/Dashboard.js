import React, { Component } from 'react';
import Logout from './Logout';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Logout setUser={this.props.setUser} />
      </div>
    );
  }
}

export default Dashboard;
