import React, { Component } from 'react';
import axios from 'axios';
import { setToken } from '../services/tokenService';

class Login extends Component {
  state = {
    userEmail: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userEmail, password } = this.state;
    // 1. POST to /auth/login, passing in the email and password in the body
    axios
      .post('/auth/login', {
        userEmail,
        password
      })
      .then(res => {
        // 2. If we receive a successful response:
        if (res.status === 200) {
          //  - grab the token from the response
          const token = res.data.payload;
          //  - store it in local storage
          setToken(token);
          //  - call getCurrentUser
          this.props.getCurrentUser();
        }
      })
      .catch(err => {
        console.error('👯🏼‍♂️ Error is: ', err);
      });
  };

  render() {
    return (
      <div>
        <h1>Login Screen</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="login-email">Email: </label>
            <input
              type="email"
              onChange={this.handleChange}
              name="userEmail"
              id="login-email"
              placeholder="email"
              autocomplete="off"
            />
          </div>
          <div>
            <label htmlFor="login-password">Password: </label>
            <input
              type="password"
              onChange={this.handleChange}
              name="password"
              id="login-password"
              placeholder="Enter your desired password"
            />
          </div>
          <div>
            <input type="submit" value="Log In" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
