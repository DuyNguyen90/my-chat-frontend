import LoginScreen from './features/auth/login/LoginScreen';
import React from 'react'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import NavigationBar from './components/NavigationBar';
import { history } from './app/store';

function App() {
  return (
    <Router>
      <ConnectedRouter history={history}>
        <Routes>
            <Route path="/" element={
                <LoginScreen />
            } />
            <Route path="/main" element={
              <div>
                <NavigationBar />
                <h1>Main page</h1>
              </div>
            } />
        </Routes>
      </ConnectedRouter>
    </Router>
  );
}

export default App;
