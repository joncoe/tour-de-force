import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Home Page.</h1>
        </header>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to={{ pathname: '/signup' }}>Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
