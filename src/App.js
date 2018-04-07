import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

import { getToken } from './services/tokenService';

import Home from './components/Home';
import ListEvents from './components/ListEvents';
import AddEvent from './components/AddEvent';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    // When the app loads, try and get the current user
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    // 1. Try and retrieve the user's token
    const token = getToken();
    // 2. If they have a token, make a request to /user/current for their user details
    if (token) {
      axios
        .get('/user/current', {
          // 3. Pass the token as an Authorization Header
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          // 4. If a successful response returns, store the user in state.
          if (res.status === 200) {
            const user = res.data.payload;
            this.setUser(user);
          }
        });
    }
  };

  setUser = user => {
    // Set the current user into state.
    this.setState({
      user
    });
  };

  render() {
    return (
      <Router>
        <div className="appContainer">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                if (this.state.user) {
                  return <Redirect to="/dashboard" />;
                } else {
                  return <Home />;
                }
              }}
            />

            <Route
              exact
              path="/dashboard"
              render={() => {
                if (!this.state.user) {
                  return <Redirect to="/" />;
                } else {
                  return <Dashboard setUser={this.setUser} />;
                }
              }}
            />
            <Route exact path="/add-event" component={AddEvent} />

            <Route
              exact
              path="/login"
              render={() => {
                if (!this.state.user) {
                  return <Login getCurrentUser={this.getCurrentUser} />;
                } else {
                  return <Redirect to="/dashboard" />;
                }
              }}
            />

            <Route
              exact
              path="/signup"
              render={() => {
                if (this.state.user) {
                  return <Redirect to="/dashboard" />;
                } else {
                  return <SignUp setUser={this.setUser} />;
                }
              }}
            />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
