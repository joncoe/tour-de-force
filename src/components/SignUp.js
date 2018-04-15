import React, { Component } from 'react';
import axios from 'axios';


class SignUp extends Component {
  state = {
    userName: '',
    userEmail: '',
    password: '',
    duplicate: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //  1.  Grab the email and password out of the component state.
    const { userName, userEmail, password } = this.state;
    //  2.  Send a POST request to our /auth/signup with userEmail and password
    axios
      .post('/auth/signup', { userName, userEmail, password })
      .then(res => {
        //  3.  If successful, set user into state
        if (res.status === 200) {
          const user = res.data.payload;
          this.props.setUser(user);
        }
      })
      .catch(err => {
        console.log(err.response.data.payload);
        if (err.response.data.payload.code === '11000') {
          this.setState({ duplicate: true })
        }

      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/*
            <div>
              <label htmlFor="userName">User Name: </label>
              <input
                type="text"
                onChange={this.handleChange}
                name="userName"
                id="username"
                placeholder="username"
                autoComplete="off"
              />
            </div>
          */}
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              onChange={this.handleChange}
              name="userEmail"
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
              autoComplete="new-password"
            />
          </div>
          <div>
            <input type="submit" value="Signup" />
          </div>
        </form>
        {this.state.duplicate}
      </div>
    );
  }
}

export default SignUp;
