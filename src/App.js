import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import ListEvents from './components/ListEvents';

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div>
      //     <Route exact path="/" component={Home} />
      //     <Route exact path="/events" component={ListEvents} />
      //   </div>
      // </Router>
      <ListEvents />
    );
  }
}

export default App;
