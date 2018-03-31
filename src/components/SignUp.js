import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //  1.  Grab the email and password out of the component state.
    const { username, email, password } = this.state;
    //  2.  Send a POST request to our /auth/signup with email and password
    axios.post('/auth/signup', { email, password }).then(res => {
      //  3.  If successful, set user into state
      if (res.status === 200) {
        const user = res.data.payload;
        this.props.setUser(user);
      }
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="userName">User Name: </label>
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            id="username"
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            onChange={this.handleChange}
            name="email"
            id="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="email">Password: </label>
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            id="password"
            placeholder="Enter a password"
          />
        </div>
        <div>
          <input type="submit" value="Signup" />
        </div>
      </form>
    );
  }
}

export default SignUp;
