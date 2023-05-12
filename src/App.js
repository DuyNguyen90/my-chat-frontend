import LoginScreen from './features/auth/login/LoginScreen';
import React, { Component } from "react";
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import NavigationBar from './components/NavigationBar';
import { history } from './app/store';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Routes>
            <Route exact path="/" element={
              <LoginScreen />
            } />
            <Route path="/main" element={
              <div>
                <NavigationBar />
                <h1>Main page</h1>
              </div>
            } />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
