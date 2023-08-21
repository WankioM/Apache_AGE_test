import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Home from './components/Home/Home';
import Signup from './components/Auth/Signup'; // Import the Signin component
import Login from './components/Auth/Login'; // Import the Login component
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup"> <Signup /> </Route> 
          <Route path="/login"> <Login /> </Route> 
          <Route path="/"> <Home /> </Route> 
          <Route path="*"> <ErrorPage /> </Route> 
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
