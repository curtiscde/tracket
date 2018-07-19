import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Callback from './components/Callback';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
        <div>
          <Route exact path="/" render={(props) => <Login {...props} />} />
          <Route exact path="/callback" render={(props) => <Callback {...props} />} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
