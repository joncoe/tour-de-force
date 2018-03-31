import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import ListEvents from './components/ListEvents';
import AddEvent from './components/AddEvent';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={ListEvents} />
          <Route exact path="/add-event" component={AddEvent} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
